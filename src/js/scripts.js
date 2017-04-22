import $ from 'jquery';


// import './furniture';
import bindNavigationEvents from './navigation';
import bindPanelEvents from './panels-and-quote-boxes';


$(document).ready(() => {
  // Correct copyright year.
  const d = new Date();
  const year = d.getFullYear();
  $('.copyright-year').text(year);

  // Navigation click event binding.
  bindNavigationEvents();

  // Panel & quote box click event binding.
  bindPanelEvents();
});
