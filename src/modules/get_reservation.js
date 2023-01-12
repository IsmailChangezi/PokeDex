/* eslint-disable linebreak-style */
const getReservation = async (id) => {
  const reservation = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/?item_id=${id}`);
  if (reservation.status === 200) {
    const reservationJSON = await reservation.json();
    return reservationJSON;
  }
  return [];
};

export default getReservation;