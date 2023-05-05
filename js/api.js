import { showAlert } from './alert.js';
import { closeWindow } from './form.js';
import { showErrorMessage, showSuccessMessage } from './message.js';
import {createThumbnail} from './pictures.js';


export function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
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
      if (response) {
        showSuccessMessage();
        closeWindow(true);
      } else {
        showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз');
        closeWindow(false);
      }
    })
    .catch(() => {
      showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
