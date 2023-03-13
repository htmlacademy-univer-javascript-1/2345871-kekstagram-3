function generateRandomNumberInRange(min, max) {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}


function checkLenght(stringToCheck, maxLength) {
  stringToCheck = String(stringToCheck);
  const lengthOfString = length(stringToCheck);
  if (lengthOfString <= maxLength) {
    return true;
  }
  else {
    return false;
  }
}

generateRandomNumberInRange();
checkLenght();
