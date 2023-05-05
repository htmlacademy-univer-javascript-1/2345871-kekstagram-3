import { isEscapeKey } from './utils.js';
import { imgOverlay} from './form.js';

const body = document.querySelector('body');

const hideErrorMessage = () => {
  const successMessage = document.querySelector('.error');
  body.removeChild(successMessage);
  document.querySelector(imgOverlay).classList.remove('hidden');
  body.classList.add('modal-open');
};

const errorButtonListener = () => {
  if (isEscapeKey) {
    hideErrorMessage();
    document.removeEventListener('keydown', errorButtonListener);
  }
};

export const showErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const errorButton = errorTemplate.querySelector('.error__button');
  body.append(errorTemplate);
  errorButton.addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', errorButtonListener);
};

const hideSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  body.removeChild(successMessage);
};

const successButtonListener = () => {
  if (isEscapeKey) {
    hideSuccessMessage();
    document.removeEventListener('keydown', successButtonListener);
  }
};

export const showSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const successButton = successTemplate.querySelector('.success__button');
  body.append(successTemplate);
  successButton.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successButtonListener);
};
