import { showAlert } from './alert.js';
import { closeWindow, hideWindow } from './form.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import { createThumbnail } from './pictures.js';

export function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((response) => createThumbnail(response))
    .catch(() => showAlert('Не удалось загрузить изображения'));
}

export const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow();
        showSuccessMessage();
      } else {
        closeWindow(false);
        showErrorMessage();
      }
    })
    .catch(() => {
      hideWindow();
      showErrorMessage();
    });
};
