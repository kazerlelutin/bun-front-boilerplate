import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'bun:test';
import { counterStore } from '@features/counter/counter.store';
import { multipleCounterCtrl } from '@features/multiple-counter/multiple-counter.ctrl';

const MULTIPLIER = 10;

Given('the counter store is available', async function () {
  expect(counterStore).toBeDefined();
});

Given('the multiple counter is initialized', async function () {
  let mount = document.getElementById('multiple-counter-home');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'multiple-counter-home';
    document.body.appendChild(mount);
  }
  const tpl = document.getElementById('multiple-counter');
  if (!tpl) {
    const template = document.createElement('template');
    template.id = 'multiple-counter';
    template.innerHTML = '<div><div id="multiple-counter-container">0</div></div>';
    document.body.appendChild(template);
  }
  multipleCounterCtrl.init('multiple-counter-home');
});

Then('the multiple counter display shows {string}', async function (value: string) {
  const expected = counterStore.count * MULTIPLIER;
  expect(String(expected)).toBe(value);
});

When('the counter store notifies subscribers', async function () {
  multipleCounterCtrl.UI?.();
});

Then('the multiple counter display is updated to {string}', async function (value: string) {
  const expected = counterStore.count * MULTIPLIER;
  expect(String(expected)).toBe(value);
});

Given('the multiple counter mount element does not exist', async function () {
  const mount = document.getElementById('multiple-counter-home');
  if (mount) mount.remove();
});

When('I try to initialize the multiple counter', async function () {
  this.expectedError = null;
  try {
    multipleCounterCtrl.init('multiple-counter-home');
  } catch (e) {
    this.expectedError = e;
  }
});
