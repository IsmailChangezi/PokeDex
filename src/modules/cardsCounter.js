const cardsNumber = (parameter) => {
  const cardCounter = document.getElementsByClassName(parameter).length;

  const cardsResult = document.getElementById('title');

  cardsResult.textContent = `Pokemon Info (${cardCounter})`;
};
export default cardsNumber;