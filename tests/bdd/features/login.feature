Feature: Login Tests

Scenario: Login fails for user with invalid password
    Given I navigate to the login page 
    When I log in with 'standard_user' 'invalid!!!'
    Then The login page will display error 'Username and password do not match any user in this service'

Scenario: Login fails for user who is locked out of their account
    Given I navigate to the login page 
    When I log in with 'locked_out_user' 'secret_sauce'
    Then The login page will display error 'Sorry, this user has been locked out.'

Scenario: Sigle successful login
    Given I navigate to the login page 
    When I log in with 'standard_user' 'secret_sauce'
    Then The products page will be displayed successfully

Scenario: Multiple successful login
    Given I navigate to the login page 
    When I log in with '<username>' '<password>'
    Then The products page will be displayed successfully
Examples:
    |username|password|
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|
    |error_user|secret_sauce|
    |visual_user|secret_sauce|

