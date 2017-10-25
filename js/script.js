var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modalCart = document.querySelector('.modal-cart');
var buttonJs = document.querySelectorAll('.button-popup');
var modalButtonsElements = document.querySelectorAll('[data-modal-button]');

var onModalButtonClick = function onModalButtonClick(evt) {
  evt.preventDefault();
  if (modalCart.classList.contains('modal-cart--closed')) {
    modalCart.classList.remove('modal-cart--closed');
    modalCart.classList.add('modal-cart--opened');
  } else {
    modalCart.classList.add('modal-cart--closed');
    modalCart.classList.remove('modal-cart--opened');
  }
};

Array.prototype.slice.call(modalButtonsElements).forEach(function (item) {
  item.addEventListener('click', onModalButtonClick);
});

navMain.classList.remove('main-nav--js');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains('modal-cart--opened')) {
      modalCart.classList.remove('modal-cart--opened');
      modalCart.classList.add('modal-cart--closed');
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (navToggle.classList.contains('main-nav__toggle--opened')) {
      navToggle.classList.remove('main-nav__toggle--opened');
      navToggle.classList.add('main-nav__toggle--closed');
    }
  }
});
