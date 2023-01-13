/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */

import cardsNumber from "../modules/cardsCounter";

test("counting cards", () => {
  document.body.innerHTML =
    '<h1 id="title"></h1>' +
    '  <div class="PokeCard"></div>' +
    '  <div class="PokeCard"></div>' +
    '  <div class="PokeCard"></div>';

  const cardsResult = document.getElementById("title");

  cardsNumber("PokeCard");
  expect(cardsResult.textContent).toBe("PokeCodex (3)");
});

test("counting cards should be 0", () => {
  document.body.innerHTML = '<h1 id="title"></h1>';

  const cardsResult = document.getElementById("title");

  cardsNumber("PokeCard");
  expect(cardsResult.textContent).toBe("PokeCodex (0)");
});
