// ============================================
// Peggy Harowitz Counselling — Main JS
// ============================================

(function() {
  'use strict';

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Animate hamburger
      this.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });

    // Mobile dropdown toggle
    navLinks.querySelectorAll('.dropdown').forEach(function(dropdown) {
      dropdown.querySelector('a').addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });
  }

  // --- Header scroll shadow ---
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(function(button) {
    button.addEventListener('click', function() {
      var item = this.parentElement;
      // Close other open items
      document.querySelectorAll('.faq-item.active').forEach(function(openItem) {
        if (openItem !== item) {
          openItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // --- Booking placeholder ---
  // Replace BOOKING_URL with your Jane App booking link when ready
  var BOOKING_URL = '#';
  var BOOKING_PLACEHOLDER_MSG = 'Booking link coming soon! Please use the contact form to get in touch.';

  var bookingLinks = [
    'bookNowNav', 'heroBookBtn', 'consultCta', 'ctaBookBtn',
    'footerBookLink', 'contactBookBtn'
  ];

  bookingLinks.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', function(e) {
        if (BOOKING_URL === '#') {
          e.preventDefault();
          alert(BOOKING_PLACEHOLDER_MSG);
        }
      });
      if (BOOKING_URL !== '#') {
        el.href = BOOKING_URL;
      }
    }
  });

  // --- Contact Form (basic) ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! This form is not yet connected to a backend. Please email directly for now.');
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})();
