# 📋 Cucumber Features Documentation

> Documentation automatically generated from `.feature` files

## 📑 Table of Contents

1. [Counter](#counter)<br/>
   1.1. [Counter displays initial value](#counter-counter-displays-initial-value)<br/>
   1.2. [Increment counter](#counter-increment-counter)<br/>
   1.3. [Decrement counter](#counter-decrement-counter)<br/>
   1.4. [Counter subscribes to store changes](#counter-counter-subscribes-to-store-changes)<br/>
   1.5. [Counter cleanup on navigation](#counter-counter-cleanup-on-navigation)<br/>
   1.6. [Counter init fails when mount element is missing](#counter-counter-init-fails-when-mount-element-is-missing)<br/>
2. [Multiple counter](#multiple-counter)<br/>
   2.1. [Multiple counter displays count times 10](#multiple-counter-multiple-counter-displays-count-times-10)<br/>
   2.2. [Multiple counter updates when store changes](#multiple-counter-multiple-counter-updates-when-store-changes)<br/>
   2.3. [Multiple counter uses correct multiplier](#multiple-counter-multiple-counter-uses-correct-multiplier)<br/>
   2.4. [Multiple counter init fails when mount element is missing](#multiple-counter-multiple-counter-init-fails-when-mount-element-is-missing)<br/>
   2.5. [Multiple counter subscribes to counter store](#multiple-counter-multiple-counter-subscribes-to-counter-store)<br/>
3. [Front-end Router](#front-end-router)<br/>
   3.1. [Basic navigation to home](#front-end-router-basic-navigation-to-home)<br/>
   3.2. [Navigation to About page](#front-end-router-navigation-to-about-page)<br/>
   3.3. [Router state reflects current page](#front-end-router-router-state-reflects-current-page)<br/>
4. [Routes](#routes)<br/>
   4.1. [Home route is available](#routes-home-route-is-available)<br/>
   4.2. [About route is available](#routes-about-route-is-available)<br/>
   4.3. [Routes map defines Home and About](#routes-routes-map-defines-home-and-about)<br/>
5. [Translation and internationalization](#translation-and-internationalization)<br/>
   5.1. [Language detection from browser](#translation-and-internationalization-language-detection-from-browser)<br/>
   5.2. [Language persistence in localStorage](#translation-and-internationalization-language-persistence-in-localstorage)<br/>
   5.3. [Language switching](#translation-and-internationalization-language-switching)<br/>
   5.4. [Translation retrieval](#translation-and-internationalization-translation-retrieval)<br/>
   5.5. [UI element translation](#translation-and-internationalization-ui-element-translation)<br/>
   5.6. [Supported languages](#translation-and-internationalization-supported-languages)<br/>
   5.7. [Navigation keys are translated](#translation-and-internationalization-navigation-keys-are-translated)<br/>
   5.8. [Language storage key](#translation-and-internationalization-language-storage-key)<br/>
   5.9. [Fallback translation behavior](#translation-and-internationalization-fallback-translation-behavior)<br/>
6. [Application version display](#application-version-display)<br/>
   6.1. [Version display initialization](#application-version-display-version-display-initialization)<br/>
   6.2. [Version element update](#application-version-display-version-element-update)<br/>
   6.3. [Version element not found](#application-version-display-version-element-not-found)<br/>
   6.4. [Version display on page load](#application-version-display-version-display-on-page-load)<br/>
   6.5. [Version format](#application-version-display-version-format)<br/>


---

## 1. Counter {#counter}

> As a user

**File:** `features\counter\counter.feature`

### 🔧 Background

- **GIVEN** the application is loaded
- **AND** the home page is displayed
- **AND** the counter is mounted in the DOM


### 🎯 Scenarios

#### 1.1. Counter displays initial value {#counter-counter-displays-initial-value}

🔧 **GIVEN** the counter store count is 0<br>
🎯 **WHEN** the counter is initialized<br>
✅ **THEN** the counter display shows "0"<br>

#### 1.2. Increment counter {#counter-increment-counter}

🔧 **GIVEN** the counter store count is 0<br>
➕ **AND** the counter is mounted in the DOM<br>
➕ **AND** the counter is initialized<br>
🎯 **WHEN** I click the increment button<br>
✅ **THEN** the counter display shows "1"<br>
🎯 **WHEN** I click the increment button again<br>
✅ **THEN** the counter display shows "2"<br>

#### 1.3. Decrement counter {#counter-decrement-counter}

🔧 **GIVEN** the counter store count is 3<br>
➕ **AND** the counter is mounted in the DOM<br>
➕ **AND** the counter is initialized<br>
🎯 **WHEN** I click the decrement button<br>
✅ **THEN** the counter display shows "2"<br>
🎯 **WHEN** I click the decrement button again<br>
✅ **THEN** the counter display shows "1"<br>

#### 1.4. Counter subscribes to store changes {#counter-counter-subscribes-to-store-changes}

🔧 **GIVEN** the counter is initialized<br>
🎯 **WHEN** the counter store count is set to 5<br>
✅ **THEN** the counter display is updated to reflect the new value<br>

#### 1.5. Counter cleanup on navigation {#counter-counter-cleanup-on-navigation}

🔧 **GIVEN** the counter is initialized and I have clicked increment<br>
🎯 **WHEN** I navigate away from the home page<br>
✅ **THEN** the counter cleanup is executed<br>
➕ **AND** click events are removed from the counter buttons<br>

#### 1.6. Counter init fails when mount element is missing {#counter-counter-init-fails-when-mount-element-is-missing}

🔧 **GIVEN** the counter mount element does not exist<br>
🎯 **WHEN** I try to initialize the counter<br>
✅ **THEN** an error "Element not found" is thrown<br>



---

## 2. Multiple counter {#multiple-counter}

> As a user

**File:** `features\multiple-counter\multiple-counter.feature`

### 🔧 Background

- **GIVEN** the application is loaded
- **AND** the home page is displayed
- **AND** the counter store is available


### 🎯 Scenarios

#### 2.1. Multiple counter displays count times 10 {#multiple-counter-multiple-counter-displays-count-times-10}

🔧 **GIVEN** the counter store count is 0<br>
🎯 **WHEN** the multiple counter is initialized<br>
✅ **THEN** the multiple counter display shows "0"<br>

#### 2.2. Multiple counter updates when store changes {#multiple-counter-multiple-counter-updates-when-store-changes}

🔧 **GIVEN** the multiple counter is initialized<br>
🎯 **WHEN** the counter store count is set to 3<br>
✅ **THEN** the multiple counter display shows "30"<br>
🎯 **WHEN** the counter store count is set to 5<br>
✅ **THEN** the multiple counter display shows "50"<br>

#### 2.3. Multiple counter uses correct multiplier {#multiple-counter-multiple-counter-uses-correct-multiplier}

🔧 **GIVEN** the multiple counter is initialized<br>
🎯 **WHEN** the counter store count is 1<br>
✅ **THEN** the multiple counter display shows "10"<br>
🎯 **WHEN** the counter store count is 10<br>
✅ **THEN** the multiple counter display shows "100"<br>

#### 2.4. Multiple counter init fails when mount element is missing {#multiple-counter-multiple-counter-init-fails-when-mount-element-is-missing}

🔧 **GIVEN** the multiple counter mount element does not exist<br>
🎯 **WHEN** I try to initialize the multiple counter<br>
✅ **THEN** an error "Element not found" is thrown<br>

#### 2.5. Multiple counter subscribes to counter store {#multiple-counter-multiple-counter-subscribes-to-counter-store}

🔧 **GIVEN** the multiple counter is initialized<br>
➕ **AND** the counter store count is 2<br>
🎯 **WHEN** the counter store notifies subscribers<br>
✅ **THEN** the multiple counter display is updated to "20"<br>



---

## 3. Front-end Router {#front-end-router}

> As a user

**File:** `features\router\router.feature`

### 🔧 Background

- **GIVEN** the application is loaded
- **AND** the router is initialized


### 🎯 Scenarios

#### 3.1. Basic navigation to home {#front-end-router-basic-navigation-to-home}

🎯 **WHEN** I visit the home page<br>
✅ **THEN** I should see the home page content<br>
➕ **AND** the page title should be "Bun Front Boilerplate"<br>
➕ **AND** the URL should be "/"<br>

#### 3.2. Navigation to About page {#front-end-router-navigation-to-about-page}

🎯 **WHEN** I click on the "About" link<br>
✅ **THEN** I should see the About page content<br>
➕ **AND** the page title should be "Bun Front Boilerplate"<br>
➕ **AND** the URL should be "/about"<br>
➕ **AND** the history should be updated<br>

#### 3.3. Router state reflects current page {#front-end-router-router-state-reflects-current-page}

🔧 **GIVEN** the router is initialized<br>
🎯 **WHEN** I visit the home page<br>
✅ **THEN** the URL should be "/"<br>
🎯 **WHEN** I click on the "About" link<br>
✅ **THEN** the URL should be "/about"<br>



---

## 4. Routes {#routes}

> As a user

**File:** `features\routes\routes.feature`

### 🎯 Scenarios

#### 4.1. Home route is available {#routes-home-route-is-available}

🔧 **GIVEN** the application is loaded<br>
🎯 **WHEN** I visit the home page<br>
✅ **THEN** I should see the home page content<br>
➕ **AND** the page title should be "Bun Front Boilerplate"<br>
➕ **AND** the URL should be "/"<br>
➕ **AND** the home template should be rendered<br>

#### 4.2. About route is available {#routes-about-route-is-available}

🔧 **GIVEN** the application is loaded<br>
🎯 **WHEN** I click on the "About" link<br>
✅ **THEN** I should see the About page content<br>
➕ **AND** the page title should be "Bun Front Boilerplate"<br>
➕ **AND** the URL should be "/about"<br>
➕ **AND** the about template should be rendered<br>

#### 4.3. Routes map defines Home and About {#routes-routes-map-defines-home-and-about}

🔧 **GIVEN** the application is loaded<br>
✅ **THEN** the routes should include path "/"<br>
➕ **AND** the routes should include path "/about"<br>
➕ **AND** each route should have a template and controller<br>



---

## 5. Translation and internationalization {#translation-and-internationalization}

> As a user

**File:** `features\translate\translate.feature`

### 🔧 Background

- **GIVEN** the application is initialized
- **AND** translation data is available


### 🎯 Scenarios

#### 5.1. Language detection from browser {#translation-and-internationalization-language-detection-from-browser}

🔧 **GIVEN** I visit the application for the first time<br>
➕ **AND** no language preference is stored<br>
🎯 **WHEN** the application initializes<br>
✅ **THEN** the browser language is detected<br>
➕ **AND** if the browser language is supported, it is set as current language<br>
➕ **AND** if the browser language is not supported, French is set as default<br>

#### 5.2. Language persistence in localStorage {#translation-and-internationalization-language-persistence-in-localstorage}

🔧 **GIVEN** I have previously selected a language<br>
🎯 **WHEN** the application loads<br>
✅ **THEN** the stored language preference is retrieved<br>
➕ **AND** the application uses the stored language<br>
➕ **AND** the language preference persists across sessions<br>

#### 5.3. Language switching {#translation-and-internationalization-language-switching}

🔧 **GIVEN** I am using the application<br>
🎯 **WHEN** I change the language setting<br>
✅ **THEN** the current language is updated<br>
➕ **AND** all UI elements with data-translate are updated<br>
➕ **AND** the language preference is saved to localStorage<br>

#### 5.4. Translation retrieval {#translation-and-internationalization-translation-retrieval}

🔧 **GIVEN** I have translation data for multiple languages<br>
🎯 **WHEN** I request a translation<br>
✅ **THEN** the translation for the current language is returned<br>
➕ **AND** if the current language translation is missing, French is used as fallback<br>
➕ **AND** if no translation is found, "Not found" is returned<br>

#### 5.5. UI element translation {#translation-and-internationalization-ui-element-translation}

🔧 **GIVEN** I have UI elements with data-translate attributes<br>
🎯 **WHEN** the language changes<br>
✅ **THEN** all elements with data-translate are updated<br>
➕ **AND** the text content reflects the new language<br>

#### 5.6. Supported languages {#translation-and-internationalization-supported-languages}

🔧 **GIVEN** the translation system is active<br>
🎯 **WHEN** I check available languages<br>
✅ **THEN** French (fr) is supported<br>
➕ **AND** English (en) is supported<br>
➕ **AND** Korean (ko) is supported<br>
➕ **AND** other languages are not supported<br>

#### 5.7. Navigation keys are translated {#translation-and-internationalization-navigation-keys-are-translated}

🔧 **GIVEN** the translation system is active<br>
🎯 **WHEN** I check the translation keys used in the app<br>
✅ **THEN** "home" has translations<br>
➕ **AND** "about" has translations<br>
➕ **AND** "support-me" has translations<br>
➕ **AND** "follow-updates" has translations<br>

#### 5.8. Language storage key {#translation-and-internationalization-language-storage-key}

🔧 **GIVEN** the translation system is active<br>
🎯 **WHEN** I check the localStorage key<br>
✅ **THEN** the key is "bun_language"<br>
➕ **AND** the language preference is stored under this key<br>

#### 5.9. Fallback translation behavior {#translation-and-internationalization-fallback-translation-behavior}

🔧 **GIVEN** I have a translation object with missing languages<br>
🎯 **WHEN** I request a translation<br>
✅ **THEN** the system falls back to French if the current language is missing<br>
➕ **AND** the system returns "Not found" if no translations are available<br>
➕ **AND** no errors are thrown for missing translations<br>



---

## 6. Application version display {#application-version-display}

> As a user

**File:** `features\version\version.feature`

### 🔧 Background

- **GIVEN** the application is initialized
- **AND** the version system is active


### 🎯 Scenarios

#### 6.1. Version display initialization {#application-version-display-version-display-initialization}

🔧 **GIVEN** I am on any page of the application<br>
🎯 **WHEN** the version system initializes<br>
✅ **THEN** the version is retrieved from the version constant<br>
➕ **AND** the version is displayed in the element with id "version"<br>

#### 6.2. Version element update {#application-version-display-version-element-update}

🔧 **GIVEN** I have a version element in the DOM<br>
🎯 **WHEN** the displayVersion function is called<br>
✅ **THEN** the version element text content is updated<br>
➕ **AND** the version matches the package version format<br>

#### 6.3. Version element not found {#application-version-display-version-element-not-found}

🔧 **GIVEN** the version element is not present in the DOM<br>
🎯 **WHEN** the displayVersion function is called<br>
✅ **THEN** no error is thrown<br>
➕ **AND** the function handles the missing element gracefully<br>

#### 6.4. Version display on page load {#application-version-display-version-display-on-page-load}

🔧 **GIVEN** I visit the application<br>
🎯 **WHEN** the page loads<br>
✅ **THEN** the version is displayed in the header or footer<br>
➕ **AND** the version is visible to the user<br>

#### 6.5. Version format {#application-version-display-version-format}

🔧 **GIVEN** I have a version from the version constant<br>
🎯 **WHEN** I examine the version format<br>
✅ **THEN** the version follows semantic versioning (major.minor.patch)<br>
➕ **AND** the version is a valid string<br>



---

## 📊 Statistics

- **Features:** 6
- **Scenarios:** 31
- **Steps:** 143

---

*Documentation generated on 31/01/2026 at 15:05:40*

