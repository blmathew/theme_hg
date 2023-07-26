
// Add individual fontawesome icons to handle on pages
// importing them all is significantly larger to load
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons/faPenSquare";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons/faArrowCircleUp";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons/faExclamationCircle";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

library.add(
  faPenSquare,
  faCircle,
  faArrowCircleUp,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faGithub
);
dom.watch();

import './scss/theme.scss';
import './scss/chroma.scss';

import mermaid from 'mermaid';

/**
 * Run the given function when the document is ready.
 * @param {Function} fn
 */
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/**
 * Toggle the display style for the given element.
 * @param {HTMLElement} element
 */
function toggle(element) {
  element.style.display = isVisible(element) ? 'none' : 'block';
}

/**
 * Return if the element is visible.
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isVisible(element) {
  return !!(element.offsetParent || element.offsetWidth || element.offsetHeight);
}

/**
 * Handle submenu list toggling.
 * @this {HTMLElement}
 * @param {Event} e
 */
function toggleMenu(e) {
  e.preventDefault();
  Array.from(this.parentNode.parentNode.children).forEach((item) => {
    if (item.matches('ul')) {
      toggle(item);
      this.innerText = isVisible(item) ? '-' : '+';
    }
  });
}

ready(() => {
  document.addEventListener('click', (event) => {
    // handle submenu click events
    if (event.target.closest('.has-sub-menu > a span.mark')) {
      toggleMenu.call(event.target, event);
    }
  });

  const scrollButton = document.querySelector('#backtothetop-fixed');
  const navPrev = document.querySelector('.nav.nav-prev');
  const navNext = document.querySelector('.nav.nav-next');

  // Handle click on to scroll to top
  scrollButton.addEventListener('click', (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  scrollButton.style.position = 'fixed';
  scrollButton.style.bottom = '10px';
  scrollButton.style.right = '10px';

  window.addEventListener('scroll', (e) => {
    // show the scroll button after some distance in either direction
    if (window.scrollX > 100 || window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  // Have arrow left and right go backwards and forwards through pages
  window.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) {
      return;
    }

    switch (e.code) {
      case "ArrowLeft":
        navPrev.click();
        break;
      case "ArrowRight":
        navNext.click();
        break;
    }
  }, true);

  mermaid.initialize({startOnLoad:true});
});
