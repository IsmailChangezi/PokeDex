const commentsCount = (classCount, append) => {
  const counter = classCount.length;
  const counterText = document.createElement('p');
  counterText.setAttribute('id', 'counter');
  counterText.textContent = `Total comments: ${counter}`;
  append.appendChild(counterText);
};

export default commentsCount;