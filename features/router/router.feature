@router
Feature: Front-end Router
  As a user
  I want to navigate through the application
  So that I can access different pages with proper state management

  Background:
    Given the application is loaded
    And the router is initialized

  Scenario: Basic navigation to home
    When I visit the home page
    Then I should see the home page content
    And the page title should be "Bun Front Boilerplate"
    And the URL should be "/"

  Scenario: Navigation to About page
    When I click on the "About" link
    Then I should see the About page content
    And the page title should be "Bun Front Boilerplate"
    And the URL should be "/about"
    And the history should be updated

  Scenario: Router state reflects current page
    Given the router is initialized
    When I visit the home page
    Then the URL should be "/"
    When I click on the "About" link
    Then the URL should be "/about"
