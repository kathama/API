const api = "https://rickandmortyapi.com/api/character";

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
};

const fillDate = (jsonData) => {
  let htmlCards = "";
  jsonData.results.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards +=  `<img src="${e.image}" class="card-img-top" alt="...">`;
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-text">${e.status}</h5>`;
    htmlCards += `<h5 class="card-text">${e.species}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getDate(api);
