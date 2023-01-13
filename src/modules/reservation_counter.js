/* eslint-disable linebreak-style */

const reservationCounter = (classToCount, append) => {
  const counter = classToCount.length;
  const reservationCounter = document.createElement('h3');
  reservationCounter.className = 'reservation-title';
  reservationCounter.textContent = `Reservations (${counter})`;
  append.prepend(reservationCounter);
};

export default reservationCounter;