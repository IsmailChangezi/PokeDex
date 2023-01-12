const cardsNumber = (parameter) => {
  const cardCounter = document.getElementsByClassName(parameter).length;

  const cardsResult = document.getElementById('title');

  cardsResult.textContent = `PokeCodex (${cardCounter})`;
};
export default cardsNumber;