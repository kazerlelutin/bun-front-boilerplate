import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { activeFooterLink } from './active-footer-link';

describe('active-footer-link', () => {
  let nav: HTMLElement;
  let linkHome: HTMLAnchorElement;
  let linkAbout: HTMLAnchorElement;

  beforeEach(() => {
    nav = document.createElement('nav');
    nav.className = 'app-footer-nav';

    linkHome = document.createElement('a');
    linkHome.href = '/';
    linkHome.className = 'other';
    nav.appendChild(linkHome);

    linkAbout = document.createElement('a');
    linkAbout.href = '/about';
    nav.appendChild(linkAbout);

    document.body.appendChild(nav);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should add active and aria-current to link matching path', () => {
    activeFooterLink('/');
    expect(linkHome.classList.contains('active')).toBe(true);
    expect(linkHome.getAttribute('aria-current')).toBe('page');
    expect(linkAbout.classList.contains('active')).toBe(false);
    expect(linkAbout.getAttribute('aria-current')).toBeNull();
  });

  it('should add active and aria-current to about link when path is /about', () => {
    activeFooterLink('/about');
    expect(linkAbout.classList.contains('active')).toBe(true);
    expect(linkAbout.getAttribute('aria-current')).toBe('page');
    expect(linkHome.classList.contains('active')).toBe(false);
  });

  it('should remove active and aria-current from all when no match', () => {
    linkHome.classList.add('active');
    linkHome.setAttribute('aria-current', 'page');
    activeFooterLink('/other');
    expect(linkHome.classList.contains('active')).toBe(false);
    expect(linkHome.getAttribute('aria-current')).toBeNull();
    expect(linkAbout.classList.contains('active')).toBe(false);
  });

  it('should switch active from one link to another', () => {
    activeFooterLink('/');
    expect(linkHome.classList.contains('active')).toBe(true);
    activeFooterLink('/about');
    expect(linkHome.classList.contains('active')).toBe(false);
    expect(linkAbout.classList.contains('active')).toBe(true);
  });

  it('should not throw when nav has no links', () => {
    document.body.innerHTML = '';
    const emptyNav = document.createElement('nav');
    emptyNav.className = 'app-footer-nav';
    document.body.appendChild(emptyNav);
    expect(() => activeFooterLink('/')).not.toThrow();
  });
});
