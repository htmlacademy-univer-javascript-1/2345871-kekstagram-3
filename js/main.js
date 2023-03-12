const DESCRIPTIONS = [
  'Это я в Дубае, я сейчас отдыхаю',
  'Я вообще делаю что хочу',
  'Мне платят за концерты, я читаю под фанеру',
  'Я подумаю потом, но скажу сразу - да',
  'Пусть не забывают, кто тут королева',
  'Эту сумку мне муж купил',
  'На мне норковая шуба',
  'Миллионы алых роз',
  'Твоя любовь это так красиво',
  'Болючая осень, холодный ноябрь',
  'Не тешат прогнозы',
  'Пятые сутки я не сплю',
  'Этот пейзаж меня будоражит',
  'Я в глазах твоих видел снег в океане',
  'Закат',
];

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// function checkStringLength(string, length) {
//   return string.length <= length;
// }

// for DESCRIPTION
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

let idNumber = 1;
let urlNumber = 1;

const createPublication = () => ({
  id: idNumber++,
  url: `photos/${urlNumber++}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15,200),
  comments: getRandomPositiveInteger(0,200),
});

const arrayOfPublications = Array.from({length: 25}, createPublication);
arrayOfPublications();
