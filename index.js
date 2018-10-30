start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";
  fetch(RANDOM_DOG_URL)
    .then(function(apiResponse) {
      return apiResponse.json();
    })
    .then(function(jsonResponse) {
      const image = document.createElement("img");
      image.alt = "Perrito Bonito!";
      image.src = jsonResponse.message;

      document.querySelector(".doggos").appendChild(image);
    });
}
