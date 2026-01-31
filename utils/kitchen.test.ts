import { describe, it, expect, beforeEach } from 'bun:test';
import {
  recipe,
  cook,
  cancel,
  recipeFor,
  cookFor,
  cancelFor,
  plate,
  service,
} from './kitchen';

describe('kitchen', () => {
  beforeEach(() => {
    cancel('test-key');
    cancel('plate-key');
  });

  describe('recipe / read by key', () => {
    it('should run read task on next frame', async () => {
      let ran = false;
      recipe('test-key', () => {
        ran = true;
      });
      expect(ran).toBe(false);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(true);
    });
  });

  describe('cook / write by key', () => {
    it('should run write task on next frame', async () => {
      let ran = false;
      cook('test-key', () => {
        ran = true;
      });
      expect(ran).toBe(false);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(true);
    });
  });

  describe('cancel', () => {
    it('should prevent scheduled read task from running', async () => {
      let ran = false;
      recipe('test-key', () => {
        ran = true;
      });
      cancel('test-key');
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(false);
    });

    it('should prevent scheduled write task from running', async () => {
      let ran = false;
      cook('test-key', () => {
        ran = true;
      });
      cancel('test-key');
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(false);
    });
  });

  describe('recipeFor / read by element', () => {
    it('should run read task for element on next frame', async () => {
      const el = document.createElement('div');
      let ran = false;
      recipeFor(el, () => {
        ran = true;
      });
      expect(ran).toBe(false);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(true);
    });
  });

  describe('cookFor / write by element', () => {
    it('should run write task for element on next frame', async () => {
      const el = document.createElement('div');
      let ran = false;
      cookFor(el, () => {
        ran = true;
      });
      expect(ran).toBe(false);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(true);
    });
  });

  describe('cancelFor', () => {
    it('should prevent scheduled task for element from running', async () => {
      const el = document.createElement('div');
      let ran = false;
      recipeFor(el, () => {
        ran = true;
      });
      cancelFor(el);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(false);
    });
  });

  describe('plate', () => {
    it('should run producer on next frame (same as cook)', async () => {
      let ran = false;
      plate('plate-key', () => {
        ran = true;
      });
      expect(ran).toBe(false);
      await new Promise((r) => requestAnimationFrame(r));
      expect(ran).toBe(true);
    });
  });

  describe('service', () => {
    it('should resolve after next frame', async () => {
      await expect(service()).resolves.toBeUndefined();
    });
  });
});
