import { test, expect, request } from '@playwright/test';
import { Login } from '../pages/sauceDemo/login.cjs';
import { Products } from '../pages/sauceDemo/products.cjs';
import { ProductsDetails } from '../pages/sauceDemo/productDetails.cjs';
import { ShoppingCart } from '../pages/sauceDemo/shoppingCart.cjs';
import { Checkout } from '../pages/sauceDemo/checkout.cjs';
import { CompletedOrder } from '../pages/sauceDemo/completedOrder.cjs';
let login, products, productDetails, shoppingCart, checkout, completeOrder;

test.beforeEach(async ({ page }) => {
    login = new Login(page);
    products = new Products(page);
    productDetails = new ProductsDetails(page);
    shoppingCart = new ShoppingCart(page);
    checkout = new Checkout(page);
    completeOrder = new CompletedOrder(page);
});

const item = {
    name: 'Sauce Labs Fleece Jacket',
    price: 49.99,
    itemPriorityOrder: 1
}

test(`Complete purchase`, async () => {
    await login.loginAs('standard_user', 'secret_sauce');    
    await expect(products.pageHeader).toBeVisible();

    //View Product details and add to shopping cart
    await products.getItemDetailsLink(item.name).click();
    await expect(productDetails.itemDetailsHeader).toContainText(item.name);
    await expect(productDetails.getItemImage(item.name)).toBeVisible();
    await productDetails.addToCartButton.click();

    //Review shopping cart has correct items
    await expect(shoppingCart.shoppingCartHeaderItemsCount).toBeVisible();
    await expect(shoppingCart.shoppingCartHeaderItemsCount).toContainText('1');
    await shoppingCart.shoppingCartHeaderLink.click();
    await expect(shoppingCart.pageHeader).toBeVisible()
    await expect(shoppingCart.pageHeader).toContainText('Your Cart');
    await expect(shoppingCart.getItemQuantity(item.itemPriorityOrder)).toContainText('1');
    await expect(shoppingCart.getItemNameLink(item.itemPriorityOrder)).toContainText(item.name);
    await expect(shoppingCart.getItemPrice(item.itemPriorityOrder)).toContainText(item.price.toString());
    await shoppingCart.checkoutButton.click();
    
    //Checkout by entering name and postal code for where to send order
    await expect(checkout.pageHeader).toBeVisible();
    await checkout.firstNameTextBox.fill('Lebron');
    await checkout.lastNameTextBox.fill('James');
    await checkout.zipPostalCodeTextBox.fill('90210');
    await checkout.continueButton.click();
    
    //Verify payment information
    await expect(completeOrder.pageHeader).toBeVisible();    
    await expect(completeOrder.paymentInfo).toContainText('SauceCard #31337');
    await expect(completeOrder.shippingInfo).toContainText('Free Pony Express Delivery!');
    await expect(completeOrder.subTotal).toContainText(item.price.toString());    
    let salesTax = Math.ceil((item.price * 0.08) * 100) / 100;
    await expect(completeOrder.taxTotal).toContainText(salesTax.toString());
    await expect(completeOrder.summaryTotal).toContainText((item.price + salesTax).toString());

    //Complete Order
    await completeOrder.finishedButton.click();
    await expect(completeOrder.completedOrderConfirmation).toBeVisible();
});