import Swiper, { Navigation } from "swiper";

// const swiper = new Swiper(".swiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
const coachesSwiper = new Swiper(".coaches__swiper", {
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

const reviewsSwiper = new Swiper(".reviews__swiper", {
  modules: [Navigation],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: ".reviews__swiper-button-next",
    prevEl: ".reviews__swiper-button-prev",
  },
});
