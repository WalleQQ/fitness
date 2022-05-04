import Swiper, { Navigation } from "swiper";

// const swiper = new Swiper(".swiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: ".coaches__swiper-button-next",
    prevEl: ".coaches__swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
