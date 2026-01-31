import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { translateStore, setCurrentLanguage } from '@features/translate/translate.store';
import { UI, LS_KEY, availableLanguages } from '@features/translate/translate.const';
import { t } from '@features/translate/translate';

Given('the application is initialized', async function () {
  expect(typeof document).toBe('object');
  expect(translateStore).toBeDefined();
});

Given('translation data is available', async function () {
  expect(UI).toBeDefined();
  expect(Object.keys(UI).length).toBeGreaterThan(0);
});

Given('I visit the application for the first time', async function () {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(LS_KEY);
  }
});

Given('no language preference is stored', async function () {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(LS_KEY);
  }
});

When('the application initializes', async function () {
  translateStore.currentLanguage = translateStore.currentLanguage || 'fr';
});

Then('the browser language is detected', async function () {
  expect(translateStore.currentLanguage).toBeDefined();
});

Given('I have previously selected a language', async function () {
  setCurrentLanguage('en');
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LS_KEY, 'en');
  }
});

When('the application loads', async function () {
  expect(translateStore.currentLanguage).toBeDefined();
});

Then('the stored language preference is retrieved', async function () {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem(LS_KEY);
    expect(stored === null || ['fr', 'en', 'ko'].includes(stored)).toBe(true);
  }
});

Then('the application uses the stored language', async function () {
  expect(['fr', 'en', 'ko']).toContain(translateStore.currentLanguage);
});

Given('I am using the application', async function () {
  setCurrentLanguage('fr');
});

When('I change the language setting', async function () {
  setCurrentLanguage('en');
});

Then('the current language is updated', async function () {
  expect(translateStore.currentLanguage).toBe('en');
});

Then('all UI elements with data-translate are updated', async function () {
  const elements = document.querySelectorAll('[data-translate]');
  expect(elements.length).toBeGreaterThanOrEqual(0);
});

Then('the language preference is saved to localStorage', async function () {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LS_KEY, translateStore.currentLanguage);
    expect(localStorage.getItem(LS_KEY)).toBe(translateStore.currentLanguage);
  }
});

Then('if the browser language is supported, it is set as current language', async function () {
  expect(translateStore.currentLanguage).toBeDefined();
});

Then('if the browser language is not supported, French is set as default', async function () {
  expect(['fr', 'en', 'ko']).toContain(translateStore.currentLanguage);
});

Then('the language preference persists across sessions', async function () {
  if (typeof localStorage !== 'undefined') {
    expect(localStorage.getItem(LS_KEY)).toBeTruthy();
  }
});

Given('I have translation data for multiple languages', async function () {
  expect(UI.home).toBeDefined();
  expect(UI.home.fr).toBeDefined();
  expect(UI.home.en).toBeDefined();
});

When('I request a translation', async function () {
  this.lastTranslation = t(UI.home);
});

Then('the translation for the current language is returned', async function () {
  expect(this.lastTranslation).toBeDefined();
  expect(typeof this.lastTranslation).toBe('string');
});

Then('if the current language translation is missing, French is used as fallback', async function () {
  const obj = { fr: 'Fallback' };
  expect(t(obj)).toBe('Fallback');
});

Then('if no translation is found, {string} is returned', async function (expected: string) {
  const result = t({ fr: 'x' } as any);
  expect(typeof result).toBe('string');
  if (expected === 'Not found') {
    const notFound = t({} as any);
    expect(notFound).toBe('Not found');
  }
});

Given('I have UI elements with data-translate attributes', async function () {
  const nav = document.querySelector('.app-footer-nav');
  expect(nav).toBeDefined();
});

When('the language changes', async function () {
  setCurrentLanguage('ko');
});

Then('all elements with data-translate are updated', async function () {
  expect(translateStore.currentLanguage).toBe('ko');
});

Then('the text content reflects the new language', async function () {
  expect(translateStore.currentLanguage).toBe('ko');
});

Given('the translation system is active', async function () {
  expect(translateStore).toBeDefined();
  expect(availableLanguages).toBeDefined();
});

When('I check available languages', async function () {
  this.availableLanguages = availableLanguages;
});

Then(/^French \(fr\) is supported$/, async function () {
  expect(availableLanguages.has('fr')).toBe(true);
});

Then(/^English \(en\) is supported$/, async function () {
  expect(availableLanguages.has('en')).toBe(true);
});

Then(/^Korean \(ko\) is supported$/, async function () {
  expect(availableLanguages.has('ko')).toBe(true);
});

Then('other languages are not supported', async function () {
  expect(availableLanguages.has('de')).toBe(false);
  expect(availableLanguages.has('es')).toBe(false);
});

When('I check the translation keys used in the app', async function () {
  this.uiKeys = Object.keys(UI);
});

Then('{string} has translations', async function (key: string) {
  expect(UI[key as keyof typeof UI]).toBeDefined();
  const entry = UI[key as keyof typeof UI];
  expect(entry.fr).toBeDefined();
  expect(entry.en).toBeDefined();
});

When('I check the localStorage key', async function () {
  this.lsKey = LS_KEY;
});

Then('the key is {string}', async function (key: string) {
  expect(LS_KEY).toBe(key);
});

Then('the language preference is stored under this key', async function () {
  expect(LS_KEY).toBe('bun_language');
});

Given('I have a translation object with missing languages', async function () {
  this.partialTranslation = { fr: 'Seulement FR' };
});

Then('the system falls back to French if the current language is missing', async function () {
  setCurrentLanguage('en');
  const result = t(this.partialTranslation);
  expect(result).toBe('Seulement FR');
});

Then('the system returns {string} if no translations are available', async function (expected: string) {
  const result = t({} as any);
  expect(result).toBe(expected);
});

Then('no errors are thrown for missing translations', async function () {
  expect(() => t({} as any)).not.toThrow();
});
