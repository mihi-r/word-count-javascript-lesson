export default function parseInput(input, parseContainer) {
  const ulNode = document.createElement('ul');

  input.forEach((word) => {
    const liNode = document.createElement('li');
    liNode.textContent = word;
    ulNode.appendChild(liNode);
  });

  parseContainer.appendChild(ulNode);
}
