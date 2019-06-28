export default function parseInput(input, parseContainer, wordToHighlight = '') {
  const ulNode = document.createElement('ul');

  input.forEach((word) => {
    const liNode = document.createElement('li');
    liNode.textContent = word;

    if (wordToHighlight === word) {
      liNode.classList.add('word-found');
    }
    ulNode.appendChild(liNode);
  });

  parseContainer.appendChild(ulNode);
}
