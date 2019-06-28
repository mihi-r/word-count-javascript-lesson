import parseInput from './parser.js';

const intialInput = document.querySelector('.initial-input');
const wordCount = document.querySelector('.word-count');
const countButton = document.querySelector('.count-btn');
const parsedInput = document.querySelector('.parsed-input');
const specificWord = document.querySelector('.specific-word');

countButton.onclick = function countButtonOnClicked() {
  while (parsedInput.children.length > 1) {
    parsedInput.lastChild.remove();
  }

  let preprocessedInput = intialInput.value.trim().toLowerCase().replace(/(\.|,|!|\?|\(|\)|'|")/gm, '').split(' ');
  preprocessedInput = preprocessedInput.filter(word => word !== '');

  parseInput(preprocessedInput, parsedInput, specificWord.value.toLowerCase());

  if (specificWord.value) {
    preprocessedInput = preprocessedInput.filter(word => word === specificWord.value.toLowerCase());
  }

  wordCount.textContent = `Word count: ${preprocessedInput.length}`;
};