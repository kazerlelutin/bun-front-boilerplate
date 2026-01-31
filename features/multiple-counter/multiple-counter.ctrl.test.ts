import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { multipleCounterCtrl } from './multiple-counter.ctrl';
import { counterStore } from '@/features/counter/counter.store';

describe('multiple-counter.ctrl', () => {
  const MULTIPLIER = 10;
  let mountEl: HTMLElement;
  let multipleCounterTemplate: HTMLTemplateElement;

  beforeEach(() => {
    counterStore.count = 0;

    mountEl = document.createElement('div');
    mountEl.id = 'multiple-counter-mount';
    document.body.appendChild(mountEl);

    multipleCounterTemplate = document.createElement('template');
    multipleCounterTemplate.id = 'multiple-counter';
    multipleCounterTemplate.innerHTML = `
      <div>
        <h2>MULTIPLE COUNTER</h2>
        <div id="multiple-counter-container">0</div>
      </div>
    `;
    document.body.appendChild(multipleCounterTemplate);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('structure', () => {
    it('should have init and UI', () => {
      expect(typeof multipleCounterCtrl.init).toBe('function');
      expect(typeof multipleCounterCtrl.UI).toBe('function');
    });
  });

  describe('init', () => {
    it('should throw when element is not found', () => {
      expect(() => multipleCounterCtrl.init('non-existent-id')).toThrow('Element not found: non-existent-id');
    });

    it('should append template content to element', () => {
      multipleCounterCtrl.init('multiple-counter-mount');
      const container = mountEl.querySelector('#multiple-counter-container');
      expect(container).toBeTruthy();
    });

    it('should have container for displayed value', () => {
      multipleCounterCtrl.init('multiple-counter-mount');
      const container = document.getElementById('multiple-counter-container');
      expect(container).toBeTruthy();
      expect(container?.textContent).toBeDefined();
    });
  });

  describe('UI updates', () => {
    it('should update container when UI is called after store change', async () => {
      multipleCounterCtrl.init('multiple-counter-mount');
      const container = document.getElementById('multiple-counter-container');
      counterStore.count = 3;
      multipleCounterCtrl.UI?.();
      await new Promise((r) => requestAnimationFrame(r));
      expect(container?.textContent).toBe(String(3 * MULTIPLIER));
    });
  });
});
