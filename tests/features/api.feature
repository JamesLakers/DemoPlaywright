@api
Feature: API Tests

Scenario: Get device name '<deviceName>' by id '<id>'
    Given a request is made to get the device details using id '<id>' is successful
    Then the device name will be '<deviceName>'
Examples:
    |id|deviceName|
    |6|Apple AirPods|
    |7|Apple MacBook Pro 16|
    |8|Apple Watch Series 8|
    |9|Beats Studio3 Wireless|
    |10|Apple iPad Mini 5th Gen|
    |12|Apple iPad Air|

Scenario: Add a new device and replace the device
    Given a new device is added successfully
    When a request to replace the added device is successful
    Then the device will have the correct details it was replaced with
    And the device is deleted to cleanup

Scenario: Add a new device and update the device name only
    Given a new device is added successfully
    When a request to update the added device is successful
    Then the device will have the correct details it was updated with
    And the device is deleted to cleanup
