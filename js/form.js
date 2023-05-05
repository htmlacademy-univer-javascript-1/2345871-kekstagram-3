import { makeListener, removeListener} from './effects.js';
import { isEscapeKey } from './utils.js';
import { resize } from './scale.js';


const imgForm = document.querySelector('.img-upload__form');
const closeButton = imgForm.querySelector('#upload-cancel');
export const imgOverlay = imgForm.querySelector('.img-upload__overlay');

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeWindow();
});

const closeOnButton = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

export function closeWindow() {
  imgOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  cleanForm();
  removeListener();
}

export function openWindow() {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
  makeListener();
}

imgForm.addEventListener('change', (evt) => {
  evt.preventDefault();
  openWindow();
});

function cleanForm() {
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  imgForm.querySelector('.img-upload__preview img').classList = [];
  resize(100);
}
