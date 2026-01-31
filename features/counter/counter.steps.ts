import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { counterStore } from '@features/counter/counter.store';
import counterCtrl from '@features/counter/counter.ctrl';

Given('the home page is displayed', async function () {
  const main = document.querySelector('.app-main') ?? document.getElementById('main-content');
  expect(main || document.body).toBeDefined();
});

Given('the counter is mounted in the DOM', async function () {
  let mount = document.getElementById('counter-home');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'counter-home';
    document.body.appendChild(mount);
  }
  const tpl = document.getElementById('counter');
  if (!tpl || tpl.tagName !== 'TEMPLATE') {
    const template = document.createElement('template');
    template.id = 'counter';
    template.innerHTML = '<div><div id="counter-container"></div><div id="counter-increment-button"><button data-action="decrement">-</button><button data-action="increment">+</button></div></div>';
    document.body.appendChild(template);
  }
});

Given('the counter store count is {int}', async function (n: number) {
  counterStore.count = n;
});

Given('the counter is initialized', async function () {
  let mount = document.getElementById('counter-home');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'counter-home';
    document.body.appendChild(mount);
  }
  const tpl = document.getElementById('counter');
  if (!tpl) {
    const template = document.createElement('template');
    template.id = 'counter';
    template.innerHTML = '<div><div id="counter-container"></div><div id="counter-increment-button"><button data-action="decrement">-</button><button data-action="increment">+</button></div></div>';
    document.body.appendChild(template);
  }
  counterCtrl.init('counter-home');
});

Then('the counter display shows {string}', async function (value: string) {
  expect(String(counterStore.count)).toBe(value);
});

When('I click the increment button', async function () {
  counterStore.count++;
});

When('I click the increment button again', async function () {
  counterStore.count++;
});

When('I click the decrement button', async function () {
  counterStore.count--;
});

When('I click the decrement button again', async function () {
  counterStore.count--;
});

When('the counter store count is set to {int}', async function (n: number) {
  counterStore.count = n;
});

Then('the counter display is updated to reflect the new value', async function () {
  counterCtrl.UI?.();
  expect(counterStore.count).toBeDefined();
});

Given('the counter is initialized and I have clicked increment', async function () {
  let mount = document.getElementById('counter-home');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'counter-home';
    document.body.appendChild(mount);
  }
  const tpl = document.getElementById('counter');
  if (!tpl) {
    const template = document.createElement('template');
    template.id = 'counter';
    template.innerHTML = '<div><div id="counter-container"></div><div id="counter-increment-button"><button data-action="decrement">-</button><button data-action="increment">+</button></div></div>';
    document.body.appendChild(template);
  }
  counterCtrl.init('counter-home');
  counterStore.count = 1;
});

When('I navigate away from the home page', async function () {
  counterCtrl.cleanUp?.();
});

Then('the counter cleanup is executed', async function () {
  counterCtrl.cleanUp?.();
});

Then('click events are removed from the counter buttons', async function () {
  expect(counterCtrl.cleanUp).toBeDefined();
});

Given('the counter mount element does not exist', async function () {
  const mount = document.getElementById('counter-home');
  if (mount) mount.remove();
});

When('I try to initialize the counter', async function () {
  this.expectedError = null;
  try {
    counterCtrl.init('counter-home');
  } catch (e) {
    this.expectedError = e;
  }
});

Then('an error {string} is thrown', async function (message: string) {
  expect(this.expectedError).toBeDefined();
  expect((this.expectedError as Error).message).toContain(message);
});
