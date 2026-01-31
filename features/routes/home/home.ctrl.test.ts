import { describe, it, expect, beforeEach, afterEach } from 'bun:test';

describe('home.ctrl', () => {
  beforeEach(() => {
    // Create DOM elements required by homeCtrl.init (counter + multiple-counter)
    const counterHome = document.createElement('div');
    counterHome.id = 'counter-home';
    document.body.appendChild(counterHome);

    const multipleCounterHome = document.createElement('div');
    multipleCounterHome.id = 'multiple-counter-home';
    document.body.appendChild(multipleCounterHome);

    const counterTemplate = document.createElement('template');
    counterTemplate.id = 'counter';
    counterTemplate.innerHTML = `
      <div>
        <div id="counter-container"></div>
        <div id="counter-increment-button">
          <button data-action="decrement">-</button>
          <button data-action="increment">+</button>
        </div>
      </div>
    `;
    document.body.appendChild(counterTemplate);

    const multipleCounterTemplate = document.createElement('template');
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
    // Clean up DOM
    document.body.innerHTML = '';
  });

  describe('homeCtrl structure', () => {
    it('should be defined', () => {
      // Import the controller to test its structure
      const homeCtrl = require('./home.ctrl').default;
      expect(homeCtrl).toBeDefined();
      expect(typeof homeCtrl.init).toBe('function');
      expect(typeof homeCtrl.cleanUp).toBe('function');
    });

    it('should have correct structure', () => {
      const homeCtrl = require('./home.ctrl').default;
      expect(homeCtrl).toHaveProperty('init');
      expect(homeCtrl).toHaveProperty('cleanUp');
    });
  });

  describe('homeCtrl functions', () => {
    it('should have init function that can be called', () => {
      const homeCtrl = require('./home.ctrl').default;
      expect(() => homeCtrl.init()).not.toThrow();
    });

    it('should have cleanUp function that can be called', () => {
      const homeCtrl = require('./home.ctrl').default;
      expect(() => homeCtrl.cleanUp()).not.toThrow();
    });

    it('should be able to call init and cleanUp in sequence', () => {
      const homeCtrl = require('./home.ctrl').default;
      expect(() => {
        homeCtrl.init();
        homeCtrl.cleanUp();
      }).not.toThrow();
    });

    it('should be able to call functions multiple times', () => {
      const homeCtrl = require('./home.ctrl').default;
      expect(() => {
        homeCtrl.init();
        homeCtrl.init();
        homeCtrl.cleanUp();
        homeCtrl.cleanUp();
      }).not.toThrow();
    });
  });

  describe('homeCtrl integration', () => {
    it('should work with proper DOM structure', () => {
      const homeCtrl = require('./home.ctrl').default;

      // Test that it works with the required DOM element
      expect(() => homeCtrl.init()).not.toThrow();
      expect(() => homeCtrl.cleanUp()).not.toThrow();
    });

    it('should handle missing DOM elements gracefully', () => {
      document.body.innerHTML = '';

      const homeCtrl = require('./home.ctrl').default;

      // init throws when counter-home is missing
      expect(() => homeCtrl.init()).toThrow('Element not found: counter-home');
      // cleanUp does not throw when DOM is empty
      expect(() => homeCtrl.cleanUp()).not.toThrow();
    });
  });
});