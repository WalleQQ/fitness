import {isEnterKey} from '../modules/utils.js';
const tabs = document.querySelectorAll('.subscriptions__tabs-item');
const tabContent = document.querySelectorAll(
    '.subscriptions__tabs-content-list'
);

const hideTab = () => {
  tabs.forEach((item) => {
    item.classList.remove('subscriptions__tabs-item--current');
  });
  tabContent.forEach((item) => {
    item.classList.remove('subscriptions__tabs-content-list--current');
  });
};

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    hideTab();
    tab.classList.add('subscriptions__tabs-item--current');
    tabContent[i].classList.add('subscriptions__tabs-content-list--current');
  });
  tab.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      evt.preventDefault();
      hideTab();
      tab.classList.add('subscriptions__tabs-item--current');
      tabContent[i].classList.add('subscriptions__tabs-content-list--current');
    }
  });
});
