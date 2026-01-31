import { Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { routes } from '@features/routes/routes';

Then('the home template should be rendered', async function () {
  const template = document.getElementById('home');
  expect(template).toBeDefined();
  const route = routes.get('/');
  expect(route).toBeDefined();
  expect(route?.templateId).toBe('home');
});

Then('the about template should be rendered', async function () {
  const template = document.getElementById('about');
  expect(template).toBeDefined();
  const route = routes.get('/about');
  expect(route).toBeDefined();
  expect(route?.templateId).toBe('about');
});

Then('the routes should include path {string}', async function (path: string) {
  expect(routes.has(path)).toBe(true);
});

Then('each route should have a template and controller', async function () {
  for (const [, route] of routes) {
    expect(route.templateId).toBeDefined();
    expect(route.templateId.length).toBeGreaterThan(0);
    expect(route.ctrl).toBeDefined();
    expect(typeof route.ctrl?.init).toBe('function');
  }
});
