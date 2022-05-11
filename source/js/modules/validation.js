import {sendData} from './api';

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name=contactsName]');
const telInput = document.querySelector('input[name=contactsPhone]');

nameInput.addEventListener('input', () => {
  const value = nameInput.value;
  const nameRegExp = /^[a-zA-Zа-яА-Я]+/g;
  if (nameRegExp.test(value) === false) {
    nameInput.setCustomValidity('Введите имя русскими или английскими буквами');
  } else {
    nameInput.setCustomValidity('');
  }
  nameInput.reportValidity();
});

telInput.addEventListener('input', () => {
  const value = telInput.value;
  const telRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  if (telRegExp.test(value) === false) {
    telInput.setCustomValidity('Введите номера телефона');
  } else {
    telInput.setCustomValidity('');
  }
  telInput.reportValidity();
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData();
  evt.target.reset();
});
