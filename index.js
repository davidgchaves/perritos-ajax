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
      //console.log(breeds);

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
      const option2 = document.createElement("option");
      option2.value = breedsList[76];
      option2.innerText = capitalizeFirstLetter(breedsList[76]);
      document.querySelector("#breed-select").appendChild(option2);
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
