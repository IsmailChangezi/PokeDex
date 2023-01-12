/* eslint-disable linebreak-style */

const postReservation = async (id, name, dateStart, dateEnd) => {
  if (name.length > 0 && dateStart.length > 0 && dateEnd.length > 0) {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/reservations/',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            item_id: id,
            username: name,
            date_start: dateStart,
            date_end: dateEnd,
          },
        ),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }
};

export default postReservation;