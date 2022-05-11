import {iosVhFix} from './utils/ios-vh-fix';
import {coachesSwiper, reviewsSwiper} from '../js/modules/swiper.js';
import '../js/modules/video.js';
import '../js/modules/tabs.js';
import '../js/modules/validation.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  coachesSwiper();
  reviewsSwiper();
  window.addEventListener('load', () => {});
});
