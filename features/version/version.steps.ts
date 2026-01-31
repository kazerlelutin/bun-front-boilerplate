import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { displayVersion, version } from '@features/version/version.utils';

Given('the version system is active', async function () {
  expect(typeof displayVersion).toBe('function');
  expect(version).toBeDefined();
});

Given('I am on any page of the application', async function () {
  document.body.innerHTML = '<span id="version"></span>';
});

When('the version system initializes', async function () {
  displayVersion();
});

Then('the version is retrieved from the version constant', async function () {
  expect(version).toBeDefined();
  expect(typeof version).toBe('string');
});

Then('the version is displayed in the element with id {string}', async function (id: string) {
  const el = document.getElementById(id);
  expect(el).toBeDefined();
  expect(el?.textContent).toBe(version);
});

Given('I have a version element in the DOM', async function () {
  const el = document.createElement('span');
  el.id = 'version';
  document.body.appendChild(el);
});

When('the displayVersion function is called', async function () {
  displayVersion();
});

Then('the version element text content is updated', async function () {
  const el = document.getElementById('version');
  expect(el?.textContent).toBe(version);
});

Then('the version matches the package version format', async function () {
  expect(/^\d+\.\d+\.\d+/.test(version)).toBe(true);
});

Given('the version element is not present in the DOM', async function () {
  document.body.innerHTML = '';
  const existing = document.getElementById('version');
  if (existing) existing.remove();
});

Then('no error is thrown', async function () {
  expect(() => displayVersion()).not.toThrow();
});

Then('the function handles the missing element gracefully', async function () {
  displayVersion();
});

Given('I visit the application', async function () {
  document.body.innerHTML = '<header><span id="version"></span></header>';
});

When('the page loads', async function () {
  displayVersion();
});

Then('the version is displayed in the header or footer', async function () {
  const el = document.getElementById('version');
  expect(el).toBeDefined();
  expect(el?.textContent).toBe(version);
});

Then('the version is visible to the user', async function () {
  const el = document.getElementById('version');
  expect(el?.textContent?.length).toBeGreaterThan(0);
});

Given('I have a version from the version constant', async function () {
  this.versionValue = version;
});

When('I examine the version format', async function () {
  this.versionValue = version;
});

Then('the version follows semantic versioning \\(major.minor.patch\\)', async function () {
  expect(/^\d+\.\d+\.\d+/.test(version)).toBe(true);
});

Then('the version is a valid string', async function () {
  expect(typeof version).toBe('string');
  expect(version.length).toBeGreaterThan(0);
});
