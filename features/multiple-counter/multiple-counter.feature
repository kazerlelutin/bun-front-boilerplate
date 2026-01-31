@multiple-counter
Feature: Multiple counter
  As a user
  I want to see a value that is the main counter multiplied by 10
  So that I can see a derived state from the counter store

  Background:
    Given the application is loaded
    And the home page is displayed
    And the counter store is available

  Scenario: Multiple counter displays count times 10
    Given the counter store count is 0
    When the multiple counter is initialized
    Then the multiple counter display shows "0"

  Scenario: Multiple counter updates when store changes
    Given the multiple counter is initialized
    When the counter store count is set to 3
    Then the multiple counter display shows "30"
    When the counter store count is set to 5
    Then the multiple counter display shows "50"

  Scenario: Multiple counter uses correct multiplier
    Given the multiple counter is initialized
    When the counter store count is 1
    Then the multiple counter display shows "10"
    When the counter store count is 10
    Then the multiple counter display shows "100"

  Scenario: Multiple counter init fails when mount element is missing
    Given the multiple counter mount element does not exist
    When I try to initialize the multiple counter
    Then an error "Element not found" is thrown

  Scenario: Multiple counter subscribes to counter store
    Given the multiple counter is initialized
    And the counter store count is 2
    When the counter store notifies subscribers
    Then the multiple counter display is updated to "20"
