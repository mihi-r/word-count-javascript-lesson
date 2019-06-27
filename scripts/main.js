import parseInput from './parser.js';

const intialInput = document.querySelector('.initial-input');
const wordCount = document.querySelector('.word-count');
const countButton = document.querySelector('.count-btn');
const parsedInput = document.querySelector('.parsed-input');

countButton.onclick = function countButtonOnClicked() {
    
  while (parsedInput.children.length > 1) {
    parsedInput.lastChild.remove();
  }

  let preprocessedInput = intialInput.value.trim().toLowerCase().replace(/(\.|,|!|\?|\(|\)|'|")/gm, '').split(' ');
  preprocessedInput = preprocessedInput.filter(word => word !== '');

  parseInput(preprocessedInput, parsedInput);

  wordCount.textContent = `Word count: ${preprocessedInput.length}`;
};
