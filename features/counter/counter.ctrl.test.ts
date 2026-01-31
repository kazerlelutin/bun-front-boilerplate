import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { counterCtrl } from './counter.ctrl';
import { counterStore } from './counter.store';

describe('counter.ctrl', () => {
  let mountEl: HTMLElement;
  let counterTemplate: HTMLTemplateElement;

  beforeEach(() => {
    counterStore.count = 0;

    mountEl = document.createElement('div');
    mountEl.id = 'counter-mount';
    document.body.appendChild(mountEl);

    counterTemplate = document.createElement('template');
    counterTemplate.id = 'counter';
    counterTemplate.innerHTML = `
      <div>
        <div id="counter-container"></div>
        <div id="counter-increment-button">
          <button type="button" data-action="decrement">-</button>
          <button type="button" data-action="increment">+</button>
        </div>
      </div>
    `;
    document.body.appendChild(counterTemplate);
  });

  afterEach(() => {
    counterCtrl.cleanUp?.();
    document.body.innerHTML = '';
  });

  describe('structure', () => {
    it('should have init, UI, action, cleanUp', () => {
      expect(typeof counterCtrl.init).toBe('function');
      expect(typeof counterCtrl.UI).toBe('function');
      expect(typeof counterCtrl.action).toBe('function');
      expect(typeof counterCtrl.cleanUp).toBe('function');
    });
  });

  describe('init', () => {
    it('should throw when element is not found', () => {
      expect(() => counterCtrl.init('non-existent-id')).toThrow('Element not found: non-existent-id');
    });

    it('should append template content to element', () => {
      counterCtrl.init('counter-mount');
      const container = mountEl.querySelector('#counter-container');
      const buttons = mountEl.querySelector('#counter-increment-button');
      expect(container).toBeTruthy();
      expect(buttons).toBeTruthy();
      counterCtrl.cleanUp?.();
    });

    it('should have container that receives count via cook (async)', () => {
      counterStore.count = 5;
      counterCtrl.init('counter-mount');
      const container = document.getElementById('counter-container');
      expect(container).toBeTruthy();
      counterCtrl.cleanUp?.();
    });
  });

  describe('action', () => {
    it('should increment count when increment button is clicked', () => {
      counterStore.count = 0;
      counterCtrl.init('counter-mount');
      const incrementBtn = document.querySelector('[data-action="increment"]') as HTMLButtonElement;
      expect(incrementBtn).toBeTruthy();
      incrementBtn.click();
      expect(counterStore.count).toBe(1);
      incrementBtn.click();
      expect(counterStore.count).toBe(2);
      counterCtrl.cleanUp?.();
    });

    it('should decrement count when decrement button is clicked', () => {
      counterStore.count = 3;
      counterCtrl.init('counter-mount');
      const decrementBtn = document.querySelector('[data-action="decrement"]') as HTMLButtonElement;
      expect(decrementBtn).toBeTruthy();
      decrementBtn.click();
      expect(counterStore.count).toBe(2);
      decrementBtn.click();
      expect(counterStore.count).toBe(1);
      counterCtrl.cleanUp?.();
    });
  });

  describe('cleanUp', () => {
    it('should not throw when called without init', () => {
      expect(() => counterCtrl.cleanUp?.()).not.toThrow();
    });

    it('should allow init again after cleanUp', () => {
      counterCtrl.init('counter-mount');
      counterCtrl.cleanUp?.();
      expect(() => counterCtrl.init('counter-mount')).not.toThrow();
      counterCtrl.cleanUp?.();
    });
  });
});
