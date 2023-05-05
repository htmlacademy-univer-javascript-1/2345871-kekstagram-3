const pictureTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');

export const createThumbnail = (getObjects) => {
  const pictureFragment = new DocumentFragment();

  getObjects.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;

    pictureFragment.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureFragment);
};
