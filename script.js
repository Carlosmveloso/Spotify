const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPLaylist = document.getElementById("result-playlists");

function requestAPI(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultPLaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");
  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  // Um = é igual a concatenação, Dois == significa igualdade, Três === significa igualdade e do mesmo
  if (searchValue === "") {
    resultPLaylist.classList.add("hidden");
    resultArtist.classList.remove("hidden");
    return;
  }
  requestAPI(searchValue);
});
