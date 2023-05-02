const decrease = document.querySelector('.scale__control--smaller');
const increase = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const resize = (newScale) => {
  scale.value = `${newScale}%`;
  imagePreview.style.transform = `scale(${newScale/100})`;
};

decrease.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale !== 25) {
    resize(currentScale - 25);
  }
});

increase.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale !== 100) {
    resize(currentScale + 25);
  }
});
