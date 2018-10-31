start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJson)
    .then(appendImgToDOM);
}

function toJson(apiResponse) {
  return apiResponse.json();
}

function appendImgToDOM(jsonResponse) {
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}

function makeImageFrom(dogUrl) {
  const image = document.createElement("img");
  image.alt = "Perrito Bonito!";
  image.src = dogUrl;
  return image;
}
