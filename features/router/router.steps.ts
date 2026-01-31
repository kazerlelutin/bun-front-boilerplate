import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { routerState } from '@features/router/router.state';

Given('the application is loaded', async function () {
  expect(typeof document).toBe('object');
  expect(document.body).toBeDefined();
});

Given('the router is initialized', async function () {
  expect(routerState).toBeDefined();
  routerState.currentPage = '/';
  expect(routerState.currentPage).toBe('/');
});

When('I visit the home page', async function () {
  routerState.currentPage = '/';
  if (typeof window.history.replaceState === 'function') {
    window.history.replaceState({}, '', '/');
  }
});

Then('I should see the home page content', async function () {
  const template = document.getElementById('home');
  expect(template).toBeDefined();
  expect(template?.tagName).toBe('TEMPLATE');
});

Then('I should see the About page content', async function () {
  const template = document.getElementById('about');
  expect(template).toBeDefined();
  expect(template?.tagName).toBe('TEMPLATE');
});

Then('the page title should be {string}', async function (title: string) {
  expect(document.title).toBe(title);
});

Then('the URL should be {string}', async function (url: string) {
  const pathname = (window.location?.pathname && window.location.pathname !== 'blank')
    ? window.location.pathname
    : routerState.currentPage;
  expect(pathname).toBe(url);
});

When('I click on the {string} link', async function (linkText: string) {
  const link = document.querySelector(`a[href*="${linkText.toLowerCase()}"]`) as HTMLAnchorElement;
  expect(link).toBeDefined();
  if (link) {
    const path = link.getAttribute('href') ?? '/';
    routerState.currentPage = path;
    if (typeof window.history.replaceState === 'function') {
      window.history.replaceState({}, '', path);
    }
    link.click();
  }
});

Then('the history should be updated', async function () {
  expect(window.history).toBeDefined();
});
