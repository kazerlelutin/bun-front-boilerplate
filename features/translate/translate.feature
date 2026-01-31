@translate
Feature: Translation and internationalization
  As a user
  I want to use the application in my preferred language
  So that I can understand and interact with the interface effectively

  Background:
    Given the application is initialized
    And translation data is available

  Scenario: Language detection from browser
    Given I visit the application for the first time
    And no language preference is stored
    When the application initializes
    Then the browser language is detected
    And if the browser language is supported, it is set as current language
    And if the browser language is not supported, French is set as default

  Scenario: Language persistence in localStorage
    Given I have previously selected a language
    When the application loads
    Then the stored language preference is retrieved
    And the application uses the stored language
    And the language preference persists across sessions

  Scenario: Language switching
    Given I am using the application
    When I change the language setting
    Then the current language is updated
    And all UI elements with data-translate are updated
    And the language preference is saved to localStorage

  Scenario: Translation retrieval
    Given I have translation data for multiple languages
    When I request a translation
    Then the translation for the current language is returned
    And if the current language translation is missing, French is used as fallback
    And if no translation is found, "Not found" is returned

  Scenario: UI element translation
    Given I have UI elements with data-translate attributes
    When the language changes
    Then all elements with data-translate are updated
    And the text content reflects the new language

  Scenario: Supported languages
    Given the translation system is active
    When I check available languages
    Then French (fr) is supported
    And English (en) is supported
    And Korean (ko) is supported
    And other languages are not supported

  Scenario: Navigation keys are translated
    Given the translation system is active
    When I check the translation keys used in the app
    Then "home" has translations
    And "about" has translations
    And "support-me" has translations
    And "follow-updates" has translations

  Scenario: Language storage key
    Given the translation system is active
    When I check the localStorage key
    Then the key is "bun_language"
    And the language preference is stored under this key

  Scenario: Fallback translation behavior
    Given I have a translation object with missing languages
    When I request a translation
    Then the system falls back to French if the current language is missing
    And the system returns "Not found" if no translations are available
    And no errors are thrown for missing translations
