@login
Feature: Login Tests

@negative
Scenario: Login fails for user with invalid password
    Given I attempt to login as 'standard_user' with password 'invalid!!!'
    Then The login page will display error 'Username and password do not match any user in this service'

@negative
Scenario: Login fails for user who is locked out of their account
    Given I attempt to login as 'locked_out_user' with password 'secret_sauce'
    Then The login page will display error 'Sorry, this user has been locked out.'

@positive
Scenario: Sigle successful login
    Given I attempt to login as 'standard_user' with password 'secret_sauce'
    Then The products page will be displayed successfully

@positive
Scenario: Multiple successful login
    Given I attempt to login as '<username>' with password '<password>'
    Then The products page will be displayed successfully
Examples:
    |username|password|
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|
    |error_user|secret_sauce|
    |visual_user|secret_sauce|
    |performance_glitch_user|secret_sauce|

@positive
Scenario: Multiple successful login from file
    Given I login successfully using credentials from file