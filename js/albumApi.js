const api = "https://jsonplaceholder.typicode.com/photos";

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
    // crear las 10 cards con los datos de los 10 usuarios que estan dentro de jsonData
    let htmlCards = "";
    for (let i = 0; i < 20; i++) {
      htmlCards += '<div class="col">';
      htmlCards += '<div class="card">';
      htmlCards +=  `<img src="${jsonData[i].url}" class="card-img-top" alt="...">`;
      htmlCards += '<div class="card-body">';
      htmlCards += `<h5 class="card-title">${jsonData[i].title}</h5>`; // interpolacion
      htmlCards += "</div>";
      htmlCards += "</div>";
      htmlCards += "</div>";
        
    }
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
  };

  getDate(api);