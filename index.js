start();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
}

function onClick(_event) {
  const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";
  const dogPromise = fetch(RANDOM_DOG_URL);

  dogPromise.then(toJson).then(appendDogImageToDOM);
}

function toJson(response) {
  return response.json();
}

function appendDogImageToDOM(json) {
  const dogContainer = document.querySelector(".doggos");
  const dogUrl = json.message;
  const img = createImageFrom(dogUrl);
  dogContainer.appendChild(img);
}

function createImageFrom(url) {
  const img = document.createElement("img");
  img.alt = "perrito bonito";
  img.src = url;
  return img;
}
