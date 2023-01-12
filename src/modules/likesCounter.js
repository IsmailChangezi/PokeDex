export default function liked(item) {
  document.getElementById(item).addEventListener('click', () => {
    const data = {
      item_id: item,
    };

    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

      .then((response) => response.json());

    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/likes/')
      .then((response) => response.json())
      .then((json) => {
        const pokeLikes = json;

        for (let i = 0; i < pokeLikes.length; i += 1) {
          if (pokeLikes[i].item_id === item) {
            const pokeConst = `likes${item}`;
            const pokeNumber = document.getElementById(pokeConst);
            pokeNumber.textContent = pokeLikes[i].likes;
          }
        }
      });
  });
}
