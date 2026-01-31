@counter
Feature: Counter
  As a user
  I want to see and change a counter value on the home page
  So that I can interact with a simple stateful component

  Background:
    Given the application is loaded
    And the home page is displayed
    And the counter is mounted in the DOM

  Scenario: Counter displays initial value
    Given the counter store count is 0
    When the counter is initialized
    Then the counter display shows "0"

  Scenario: Increment counter
    Given the counter store count is 0
    And the counter is mounted in the DOM
    And the counter is initialized
    When I click the increment button
    Then the counter display shows "1"
    When I click the increment button again
    Then the counter display shows "2"

  Scenario: Decrement counter
    Given the counter store count is 3
    And the counter is mounted in the DOM
    And the counter is initialized
    When I click the decrement button
    Then the counter display shows "2"
    When I click the decrement button again
    Then the counter display shows "1"

  Scenario: Counter subscribes to store changes
    Given the counter is initialized
    When the counter store count is set to 5
    Then the counter display is updated to reflect the new value

  Scenario: Counter cleanup on navigation
    Given the counter is initialized and I have clicked increment
    When I navigate away from the home page
    Then the counter cleanup is executed
    And click events are removed from the counter buttons

  Scenario: Counter init fails when mount element is missing
    Given the counter mount element does not exist
    When I try to initialize the counter
    Then an error "Element not found" is thrown
