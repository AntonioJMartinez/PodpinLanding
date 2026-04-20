// Podpin Landing Page — Interactions
(function () {
  'use strict';

  const localeMap = window.PODPIN_LOCALE_MAP || null;

  // --- Default locale selection on the root page ---
  if (localeMap && window.location.pathname === '/') {
    const storedLocale = window.localStorage.getItem('podpin-locale');
    const browserLocales = [storedLocale, ...(navigator.languages || []), navigator.language].filter(Boolean);
    const availableLocales = Object.keys(localeMap);
    const matchedLocale = browserLocales
      .map((value) => value.toLowerCase())
      .map((value) => value.split('-')[0])
      .find((value) => availableLocales.includes(value) && value !== 'en');

    if (matchedLocale) {
      window.location.replace(localeMap[matchedLocale]);
      return;
    }
  }

  // --- Navbar scroll effect ---
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('#nav-links');
  const localeSwitcher = document.querySelector('.locale-switcher');

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  function closeMobileNav() {
    nav.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // --- Scroll-reveal with Intersection Observer ---
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        closeMobileNav();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.querySelectorAll('[data-locale-link]').forEach((link) => {
    link.addEventListener('click', () => {
      const nextLocale = link.getAttribute('data-locale-link');
      if (nextLocale) {
        window.localStorage.setItem('podpin-locale', nextLocale);
      }
      closeMobileNav();
      if (localeSwitcher) {
        localeSwitcher.removeAttribute('open');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!localeSwitcher || !localeSwitcher.hasAttribute('open')) return;
    if (!localeSwitcher.contains(event.target)) {
      localeSwitcher.removeAttribute('open');
    }
  });
})();
