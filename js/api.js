//funcion getData2 () {} // funcion normal es igual de valido que la flecha
//URL de la API de usuarios
const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUsers = document.getElementById("apiUsers");

//obtener la informacion de la API
//cuando se crea una funcion recibe parametros que alguien envia
const getDate = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillDate(json);
    })
    .catch((error) => {
      console.log("error desde la api", error),
        alert("la api no esta disponible");
    });
}; // funcion flecha

const fillDate = (jsonData) => {
  // crear las 10 cards con los datos de los 10 usuarios que estan dentro de jsonData
  let htmlCards = "";
  console.log(jsonData);
  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`; // interpolacion
    htmlCards += `<h5 class="card-text">${e.email}</h5>`;
    htmlCards += `<h5 class="card-text">${e.address.city}</h5>`;
    htmlCards += `<h5 class="card-text">${e.phone}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards
};

// evento click
btnApiUsers.onclick = function () {
  getDate(api);
};
