
import {checkStringLength} from './utils.js';

const imageForm = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яА-ЯA-Za-zёЁ0-9]{1,17}$');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Длина комментария не может быть меньше 20 и больше 140 символов.');
pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег обязан начинаться с # и не должен превышать 17 символов.');


function validateHashtag(element) {
  return regex.test(element) || checkStringLength(element, 0);
}

function validateComment(element) {
  return !checkStringLength(element, 19) && checkStringLength(element, 140);
}

imageForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
