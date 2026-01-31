import { describe, it, expect, beforeEach } from 'bun:test';
import { counterStore } from './counter.store';

describe('counter.store', () => {
  beforeEach(() => {
    counterStore.count = 0;
  });

  describe('initial state', () => {
    it('should have count property', () => {
      expect(counterStore).toHaveProperty('count');
      expect(typeof counterStore.count).toBe('number');
    });

    it('should initialize count to 0', () => {
      counterStore.count = 0;
      expect(counterStore.count).toBe(0);
    });

    it('should have subscribe function', () => {
      expect(typeof counterStore.subscribe).toBe('function');
    });
  });

  describe('count updates', () => {
    it('should allow setting count', () => {
      counterStore.count = 5;
      expect(counterStore.count).toBe(5);
    });

    it('should allow incrementing count', () => {
      counterStore.count = 0;
      counterStore.count++;
      expect(counterStore.count).toBe(1);
      counterStore.count++;
      expect(counterStore.count).toBe(2);
    });

    it('should allow decrementing count', () => {
      counterStore.count = 3;
      counterStore.count--;
      expect(counterStore.count).toBe(2);
    });
  });

  describe('subscribe', () => {
    it('should call listener when count changes', () => {
      let callCount = 0;
      const listener = () => {
        callCount++;
      };
      const unsub = counterStore.subscribe(listener);

      counterStore.count = 1;
      expect(callCount).toBe(1);

      counterStore.count = 2;
      expect(callCount).toBe(2);

      unsub();
      counterStore.count = 3;
      expect(callCount).toBe(2);
    });

    it('should return unsubscribe function', () => {
      const listener = () => { };
      const unsub = counterStore.subscribe(listener);
      expect(typeof unsub).toBe('function');
      expect(() => unsub()).not.toThrow();
    });
  });
});
