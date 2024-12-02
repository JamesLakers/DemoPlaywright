@end2end
Feature: Purchase Item(s) Tests

Scenario: Purchase individual item '<itemName>'
    Given I login successfully as 'standard_user' with password 'secret_sauce'

    When I click the item '<itemName>' view details link
    And The item '<itemName>' image is displayed successfully

    And I click the add item to cart button
    And The items count in the shopping cart is '1'
    And I click the shopping cart icon in the header
    And I verify the shopping cart has the correct item '<itemName>'
    And I click the checkout button

    And I enter the shipping information
    And I click the continue to payment button

    And I verify the payment and shipping information
    And I verify the price <price> with sales tax included

    Then I complete my purchase receiving completed confirmation
Examples:
    |itemName|price|
    |Sauce Labs Backpack|29.99|
    |Sauce Labs Bolt T-Shirt|15.99|
    |Sauce Labs Onesie|7.99|
    |Sauce Labs Bike Light|9.99|
    |Sauce Labs Fleece Jacket|49.99|
    |Test.allTheThings() T-Shirt (Red)|15.99|


Scenario: Purchase multiple items from file
    Given I login successfully as 'standard_user' with password 'secret_sauce'

    When I add the items from file
    
    And The items count in the shopping cart is the amount of items from file
    And I click the shopping cart icon in the header
    And I verify the shopping cart has the correct items from file
    And I click the checkout button

    And I enter the shipping information
    And I click the continue to payment button

    And I verify the payment and shipping information
    And I verify the price for all items from file with sales tax included

    Then I complete my purchase receiving completed confirmation
    