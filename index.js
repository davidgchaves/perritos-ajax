const RANDOM_DOG_URL = "https://dog.ceo/api/breeds/image/random";

fetch(RANDOM_DOG_URL)
  .then(function(apiResponse) {
    return apiResponse.json();
  })
  .then(function(jsonResponse) {
    console.log(jsonResponse.message);
  });
