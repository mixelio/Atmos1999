"use strict";

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const scrolWidth = window.innerWidth - document.body.clientWidth;

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

const menuOpen = document.querySelector('.menu__opener');
const menuClose = document.querySelector('.menu__closer');
const menuBody = document.querySelector('.header__menu');

if (menuOpen) {
  menuOpen.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuOpen.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
  menuClose.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuOpen.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
