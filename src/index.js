
import "./styles.css";

function getData() {
  let url = "www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  fetch(url)
    .then((respone) => {
      return respone.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// getData();

console.log(getData());
console.log("Ismail");

