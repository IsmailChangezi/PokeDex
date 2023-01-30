/* eslint-disable linebreak-style */
import getReservation from './get_reservation.js';
import postReservation from './add_reservation.js';
import reservationCounter from './reservation_counter.js';
import commentsPopup from './popupCD.js';

// This function is created to display the information of each pokemon in a popup

const createPopup = (object) => {
  // First I created a popup container that is going to appear when I click the button

  const popupContainer = document.createElement('div');
  popupContainer.setAttribute('class', 'popup-card');
  const body = document.querySelector('body');
  body.appendChild(popupContainer);

  // After this I will use the name in the object to create the title of the popup

  const name = document.createElement('h1');
  name.setAttribute('class', 'pokemon-name');
  name.textContent = object.name.toUpperCase();
  popupContainer.appendChild(name);

  // I want to create one section to contain the pokemon information and the reservation form

  const popupInfo = document.createElement('div');
  popupInfo.setAttribute('class', 'popup-info');
  popupContainer.appendChild(popupInfo);

  // After this I want to create one section to put the pokemon information

  const leftSide = document.createElement('div');
  leftSide.setAttribute('class', 'left-side');
  popupInfo.appendChild(leftSide);

  // And I want to create one section to put the reservation form

  const reservationPlace = document.createElement('div');
  reservationPlace.setAttribute('class', 'reservation-container');
  popupInfo.appendChild(reservationPlace);

  // To start with the setup of the pokemon information, I will start putting the image

  const pokemonData = document.createElement('div');
  pokemonData.classList.add('pokemon-data');
  leftSide.appendChild(pokemonData);

  const header = document.createElement('div');
  header.classList.add('header');
  pokemonData.appendChild(header);

  const pokeName = document.createElement('h3');
  pokeName.classList.add('name');
  pokeName.innerText = object.name;
  header.appendChild(pokeName);

  const pokeID = document.createElement('p');
  pokeID.classList.add('id');
  pokeID.innerText = `${object.id}`;
  header.appendChild(pokeID);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('picDiv');
  const pokemonImage = document.createElement('img');
  pokemonImage.setAttribute('src', object.sprites.front_default);
  pokemonImage.setAttribute('alt', 'pokemon image');
  imgContainer.appendChild(pokemonImage);
  pokemonData.appendChild(imgContainer);

  const intro = document.createElement('div');
  intro.classList.add('intro');
  pokemonData.appendChild(intro);
  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = `
  Height: ${object.height}
  weight: ${object.weight}
  `;
  intro.appendChild(info);

  // I will display the type of the pokemon

  const pokemonTypes = object.types;
  const types = document.createElement('ul');
  types.classList.add('pokemon-types');

  pokemonTypes.forEach((type) => {
    const li = document.createElement('li');
    li.textContent = type.type.name;
    li.classList.add('type');
    li.classList.add(type.type.name);
    types.appendChild(li);
  });

  intro.appendChild(types);

  // I will add the window to display previous reservations

  const previousReservations = document.createElement('div');
  previousReservations.classList.add('previous-reservations');
  reservationPlace.appendChild(previousReservations);

  // I will add a new div where I'll put the form

  const reservationForm = document.createElement('form');
  reservationForm.classList.add('reservation-form');
  reservationPlace.appendChild(reservationForm);

  // I add all the inputs fields

  reservationForm.innerHTML = '<input type="text" class="name-input" placeholder="Your name" />'
  + '<input type="date" class="date-start-input" />'
  + '<input type="date" class="date-end-input" />'
  + '<button type="submit" class="submit-reservation">Submit</button>';

  // This part is to add the close button

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.className = 'close-btn';
  closeButton.innerHTML = 'X';
  popupContainer.appendChild(closeButton);

  closeButton.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });

  // I want to display the information in the recent reservation sections

  const table = document.createElement('table');
  table.className = 'reservations-table';
  previousReservations.appendChild(table);

  // I want to create the thead

  const thead = document.createElement('thead');
  thead.innerHTML = '<th>Name</th>'
  + '<th>Start Date</th>'
  + '<th>End Date</th>';

  table.appendChild(thead);

  // Now I will take the information from the Api to display it in the table

  const displayReservations = async () => {
    const recentReservations = await getReservation(object.id);
    await recentReservations.reverse();
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    recentReservations.forEach((reservation) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${reservation.username}</td><td>${reservation.date_start}</td><td>${reservation.date_end}</td>`;
      tr.setAttribute('class', 'reserved');
      tbody.appendChild(tr);
    });

    // Here is the counter for the reservations

    const reserved1 = document.querySelectorAll('.reserved');
    reservationCounter(reserved1, reservationPlace);
  };

  displayReservations();

  // Now I will create an event listener for the submit button

  const submitReservation = document.querySelector('.submit-reservation');
  const username = document.querySelector('.name-input');
  const dateStart = document.querySelector('.date-start-input');
  const dateEnd = document.querySelector('.date-end-input');

  submitReservation.addEventListener('click', async (e) => {
    const tbody = document.querySelector('tbody');
    const counter = document.querySelector('.reservation-title');
    counter.remove();
    tbody.remove();
    e.preventDefault();
    await postReservation(object.id, username.value, dateStart.value, dateEnd.value);
    await displayReservations();
    username.value = '';
    dateStart.value = '';
    dateEnd.value = '';
  });
};

const reservationPopup = (name) => {
  // First I will acced to the information of each pokemon using his name

  const link = 'https://pokeapi.co/api/v2/pokemon/';
  const newLink = link + name;

  // Now I will create an object with the information of the pokemon

  const pokemonObject = async () => {
    await fetch(newLink)
      .then((response) => response.json())
      .then((json) => createPopup(json));
  };
  pokemonObject();

  // Now I will create an
};

window.onload = () => {
  const btn = document.querySelectorAll('.reserve');
  btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const name = e.target.parentElement.parentElement.firstChild.firstChild.textContent;
      reservationPopup(name);
    });
  });

  const btn2 = document.querySelectorAll('.comment');
  btn2.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const name = e.target.parentElement.parentElement.children[0].children[0].innerHTML;
      commentsPopup(name);
    });
  });
};

// GET and POST reservation functions

/* postReservation(2, 'Jane', '2020-10-15', '2020-10-16'); */
