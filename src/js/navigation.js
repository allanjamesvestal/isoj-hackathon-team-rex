import $ from 'jquery';

function toggleModal() {
  if (!$('#more-info-modal').hasClass('shown')) {
    $('body').addClass('no-scroll');
    $('#more-info-modal').addClass('shown');
  } else {
    $('body').removeClass('no-scroll');
    $('#more-info-modal').removeClass('shown');
  }
}

// function toggleFocus() {  // Sets or removes .focus class on an element.
//   let self = this;
//
//   // Move up through the ancestors of the current link until we hit .nav-menu.
//   while (self.className.indexOf('nav-menu') === -1) {
//     // On li elements toggle the class .focus.
//     if (self.tagName.toLowerCase() === 'li') {
//       if (self.className.indexOf('focus') !== -1) {
//         self.className = self.className.replace(' focus', '');
//       } else {
//         self.className += ' focus';
//       }
//     }
//
//     self = self.parentElement;
//   }
// }
//
//
// function touchStartFn(e) {
//   const menuItem = this.parentNode;
//
//   if (!menuItem.classList.contains('focus')) {
//     e.preventDefault();
//     for (let i = 0; i < menuItem.parentNode.children.length; i += 1) {
//       if (menuItem.parentNode.children[i] === menuItem) {
//         continue;  // eslint-disable-line no-continue
//       }
//       menuItem.parentNode.children[i].classList.remove('focus');
//     }
//     menuItem.classList.add('focus');
//   } else {
//     menuItem.classList.remove('focus');
//   }
// }

export default () => {
  const container = $('#site-navigation');
  if (container.length === 0) { return; }

  const button = container.find('button');
  if (button.length === 0) { return; }

  const menu = container.find('ul');

  // Hide menu toggle button if menu is empty and return early.
  if (menu.length === 0 || menu.children().length === 0) {
    button.css({ display: 'none' });
    return;
  }

  menu.attr('aria-expanded', 'false');
  if (!menu.hasClass('nav-menu')) { menu.addClass('nav-menu'); }

  button.on('click', () => {
    if (container.hasClass('toggled')) {
      container.removeClass('toggled');
      button.attr('aria-expanded', 'false');
      menu.attr('aria-expanded', 'false');
    } else {
      container.addClass('toggled');
      button.attr('aria-expanded', 'true');
      menu.attr('aria-expanded', 'true');
    }
  });

  $('#more-info-trigger').on('click', (e) => {
    e.preventDefault();
    toggleModal();
  });

  $('#more-info-modal').on('click', (e) => {
    if ($(e.target).hasClass('shown')) { toggleModal(); }
  });

  $('#more-info-modal .modal-box').on('click', (e) => {
    e.stopPropagation();
  });

  $('#more-info-modal .modal-box .exit-trigger').on('click', (e) => {
    e.stopPropagation();
    if ($(e.target).closest('#more-info-modal').hasClass('shown')) {
      toggleModal();
    }
  });

  // Get all the link elements within the menu.
  // const links = menu.find('a');

  // links.on('focus', toggleFocus);
  // links.on('blur', toggleFocus);

  // Each time a menu link is focused or blurred, toggle focus.
  // for (let i = 0; i < links.length; i += 1) {
  //   links[i].addEventListener('focus', toggleFocus, true);
  //   links[i].addEventListener('blur', toggleFocus, true);
  // }
};
