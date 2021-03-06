start();

function start() {
  document
    .querySelector(".add-random-doggo")
    .addEventListener("click", onClickRandom);
  document
    .querySelector(".list-breeds")
    .addEventListener("click", onClickBreeds);
  document
    .querySelector("#breed-container")
    .addEventListener("change", onChange);
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
      //console.log(breeds);

      // Clean container to avoid duplication of elements
      document.querySelector("#breed-container").innerHTML = "";

      // TODO: Extract createLabel function
      const label = document.createElement("label");
      label.htmlFor = "breed-select";
      label.innerText = "Choose a breed:";
      //console.log(label);
      document.querySelector("#breed-container").appendChild(label);

      // TODO: Extract createSelect function
      const select = document.createElement("select");
      select.id = "breed-select";
      //console.log(select);
      document.querySelector("#breed-container").appendChild(select);

      // TODO: Extract createOption function
      const option = document.createElement("option");
      option.value = "";
      option.innerText = "👇👾🎃 Please choose an option below 👇👾🎃";
      //console.log(option);
      document.querySelector("#breed-select").appendChild(option);

      const breedsList = Object.keys(breeds);
      breedsList.forEach(function(breed) {
        const option = document.createElement("option");
        option.value = breed;
        option.innerText = capitalizeFirstLetter(breed);
        document.querySelector("#breed-select").appendChild(option);
      });
    });

  function capitalizeFirstLetter(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }
  /*
  <section id="breed-container">
    <label for="breed-select">Choose a breed:</label>  ✅
    <select id="breed-select">  ✅
      <option value="">👇👾🎃 Please choose an option below 👇👾🎃</option> ✅
      <option value="sheepdog">Fraggle Rock</option> ✅
    </select>
  </section>
  */
}

function onChange(event) {
  const selectedBreed = event.target.selectedOptions[0].value;
  const BREED_IMAGES_URL = `https://dog.ceo/api/breed/${selectedBreed}/images`;
  fetch(BREED_IMAGES_URL)
    .then(apiResponse => apiResponse.json())
    .then(function(jsonResponse) {
      const imagesUrl = jsonResponse.message;
      const randomImageUrl = imagesUrl[getRandomInt(imagesUrl.length - 1)];
      const img = makeImageFrom(randomImageUrl);
      document.querySelector(".doggos").appendChild(img);
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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
