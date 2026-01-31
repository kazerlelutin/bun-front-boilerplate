@routes
Feature: Routes
  As a user
  I want to navigate between application pages
  So that I can access Home and About with the correct controller and template

  Scenario: Home route is available
    Given the application is loaded
    When I visit the home page
    Then I should see the home page content
    And the page title should be "Bun Front Boilerplate"
    And the URL should be "/"
    And the home template should be rendered

  Scenario: About route is available
    Given the application is loaded
    When I click on the "About" link
    Then I should see the About page content
    And the page title should be "Bun Front Boilerplate"
    And the URL should be "/about"
    And the about template should be rendered

  Scenario: Routes map defines Home and About
    Given the application is loaded
    Then the routes should include path "/"
    And the routes should include path "/about"
    And each route should have a template and controller
