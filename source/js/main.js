import {iosVhFix} from './utils/ios-vh-fix';
import '../js/modules/swiper.js';
import '../js/modules/video.js';
import '../js/modules/tabs.js';
import '../js/modules/validation.js';
import '../js/modules/coaches.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {});
});
