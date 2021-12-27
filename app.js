const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const changeColorBtn = document.querySelector('.change-color');
const hexCodeText = document.querySelector('.hex-code');

changeColorBtn.addEventListener('click', () => {
  let hexCode = '#';
  for (i = 0; i < 6; i++) {
    hexCode += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = hexCode;
  hexCodeText.innerText = hexCode;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
