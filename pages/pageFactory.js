import Login from './sauceDemo/login.js';
import Products from './sauceDemo/products.js';
import ProductDetails from './sauceDemo/productDetails.js';
import ShoppingCart from './sauceDemo/shoppingCart.js';
import Checkout from './sauceDemo/checkout.js';
import CompletedOrder from './sauceDemo/completedOrder.js';

class PageFactory {
  constructor(page) {
    this.page = page;
    this.login = new Login(page);
    this.products = new Products(page);
    this.productDetails = new ProductDetails(page);
    this.shoppingCart = new ShoppingCart(page);
    this.checkout = new Checkout(page);
    this.completedOrder = new CompletedOrder(page);
  }
}

export default PageFactory;