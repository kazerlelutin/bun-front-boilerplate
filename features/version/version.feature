@version
Feature: Application version display
  As a user
  I want to see the current application version
  So that I can track updates and report issues accurately

  Background:
    Given the application is initialized
    And the version system is active

  Scenario: Version display initialization
    Given I am on any page of the application
    When the version system initializes
    Then the version is retrieved from the version constant
    And the version is displayed in the element with id "version"

  Scenario: Version element update
    Given I have a version element in the DOM
    When the displayVersion function is called
    Then the version element text content is updated
    And the version matches the package version format

  Scenario: Version element not found
    Given the version element is not present in the DOM
    When the displayVersion function is called
    Then no error is thrown
    And the function handles the missing element gracefully

  Scenario: Version display on page load
    Given I visit the application
    When the page loads
    Then the version is displayed in the header or footer
    And the version is visible to the user

  Scenario: Version format
    Given I have a version from the version constant
    When I examine the version format
    Then the version follows semantic versioning (major.minor.patch)
    And the version is a valid string
