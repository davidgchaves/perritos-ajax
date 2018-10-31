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

  fetch(LIST_BREEDS_URL)
    .then(toJson)
    .then(function(jsonResponse) {
      const breeds = jsonResponse.message;
      console.log(breeds);
    });
  /*
  <section id="breed-container">
    <label for="breed-select">Choose a breed:</label>
    <select id="breed-select">
      <option value="">👇👾🎃 Please choose an option below 👇👾🎃</option>
      <option value="sheepdog">Fraggle Rock</option>
    </select>
  </section>
  */
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
