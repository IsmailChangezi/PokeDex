/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */

import reservationCounter from '../modules/reservation_counter.js';

test('Add a new title with the number of reservations to one div', () => {
  document.body.innerHTML = '<div>'
    + '  <div class="title"></div>'
    + '<ul><li class="reservation"></li><li class="reservation"></li><li class="reservation"></li></ul>'
    + '</div>';
  const itemToCount = document.querySelectorAll('.reservation');
  const divToAppend = document.querySelector('.title');

  reservationCounter(itemToCount, divToAppend);
  expect(divToAppend.textContent).toBe('Reservations (3)');
});

test('Should return 0 if the .reservations counter is 0', () => {
  document.body.innerHTML = '<div>'
  + '  <div class="title"></div>'
  + '<ul></ul>'
  + '</div>';
  const itemToCount = document.querySelectorAll('.reservation');
  const divToAppend = document.querySelector('.title');

  reservationCounter(itemToCount, divToAppend);
  expect(divToAppend.textContent).toBe('Reservations (0)');
});
