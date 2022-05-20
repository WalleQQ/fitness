import {isTabKey} from '../modules/utils.js';
const coachesSwiper = document.querySelector('.coaches__swiper');
const coachesSwiperSlide = coachesSwiper.querySelectorAll('.swiper-slide');

const addTabindexSwiperSlide = () => {
  coachesSwiperSlide.forEach((slide) => {
    if (slide.classList.contains('swiper-slide-visible')) {
      slide.setAttribute('tabindex', '0');
    } else {
      slide.removeAttribute('tabindex');
    }
  });
};

coachesSwiperSlide.forEach((slide) => {
  addTabindexSwiperSlide();
  slide.addEventListener('keydown', (evt) => {
    if (isTabKey(evt)) {
      addTabindexSwiperSlide();
    }
  });
});
