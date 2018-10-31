start();

function start() {
  document
    .querySelector(".add-random-doggo")
    .addEventListener("click", onClickRandom);
  document
    .querySelector(".list-breeds")
    .addEventListener("click", onClickBreeds);
}

function onClickRandom(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

  fetch(RANDOM_DOG_URL)
    .then(toJson)
    .then(appendImgToDOM);
}

function onClickBreeds(_event) {
  const LIST_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";

  fetch(LIST_BREEDS_URL).then(function(apiResponse) {
    console.log(apiResponse);
  });
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
