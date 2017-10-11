var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var trendToggle = document.querySelector('.trending__button');
var trendModal = document.querySelector('.modal-cart');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--closed')) {
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

trendToggle.addEventListener('click', function() {
  if (trendModal.classList.contains('modal-cart--closed')) {
    trendModal.classList.remove('modal-cart--closed');
    trendModal.classList.add('modal-cart--opened');
  } else {
    trendModal.classList.add('modal-cart--closed');
    trendModal.classList.remove('modal-cart--opened');
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (trendModal.classList.contains("modal-cart--opened")) {
      trendModal.classList.remove("modal-cart--opened");
      trendModal.classList.add("modal-cart--closed");
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (navToggle.classList.contains("main-nav__toggle--opened")) {
      navToggle.classList.remove("main-nav__toggle--opened");
      navToggle.classList.add("main-nav__toggle--closed");
    }
  }
});
