import { iosVhFix } from "./utils/ios-vh-fix";
import "../js/modules/swiper.js";
import "../js/modules/video.js";
import "../js/modules/tabs.js";

// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();
  window.addEventListener("load", () => {});
});
