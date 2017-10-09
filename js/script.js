var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

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


// window.addEventListener("keydown", function(evt) {
//   if (evt.keyCode === 27) {
//     if (navToggle.classList.contains("main-nav__toggle--opened")) {
//       navToggle.classList.remove("main-nav__toggle--opened");
//       navToggle.classList.add("main-nav__toggle--closed");
//     }
//   }
// }
