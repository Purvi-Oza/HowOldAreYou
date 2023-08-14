@regression
Feature: Verify functionality of How Old Are You website

  Background: User clicks on URL
    Given User is on the homepage
    And User verifies title of the webpage

  Scenario: User checks error message by leaving birthdate field empty
    Then User enters the name in Your name field
    And User clicks on Submit button
    Then User verifies error text of birthday field

  Scenario: User checks error message by leaving your name field empty
    Then User enters Birthday
    And User clicks on Submit button
    Then User verifies error text of name field

  Scenario: User is on homepage
    Given User enters the name in Your name field
    Then User enters Birthday
    And User clicks on Submit button

  Scenario: User verifies the text after Submitting details
    Then User enters the name in Your name field
    Then User enters Birthday
    And User clicks on Submit button
    Then User verifies Logo Text