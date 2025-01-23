const KEY_API = "api_key=c604bd5442f618f92440c09a4a6497fd";
const URL = "https://api.themoviedb.org/3";
const BROWSE = `${URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${KEY_API}`;
const POPULAR = `${URL}/discover/movie?sort_by-popularity.desc&${KEY_API}`;
const TRENDING = `${URL}/trending/movie/day?language=en-US&${KEY_API}`;
const IMG = "https://image.tmdb.org/t/p/w500";

const browseContainer = document.querySelector(".browse");
const popularContainer = document.querySelector(".popular");
const trendingContainer = document.querySelector(".trending");

const cards = document.querySelectorAll(".cards");

getMovies(BROWSE, browseContainer);
getMovies(TRENDING, trendingContainer);
getMovies(POPULAR, popularContainer);

function getMovies(url, container) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results, container);
      console.log(data.results);
    });
}

function showMovies(data, container) {
  const movieEl = document.createElement("div");
  movieEl.classList.add("cards");

  data.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("card");
    movieElement.innerHTML = `
      <img src="${IMG}${movie.backdrop_path}" alt="Browse">
      <div class="card-content" >
        <div class="rating">
          <h2>${movie.title}</h2>
        </div>
      </div>
      <div class="overview">
        <h3>Deskripsi</h3>
        <p>${movie.overview}</p>
      </div>
    `;
    movieEl.appendChild(movieElement);
  });

  container.appendChild(movieEl);
}

// console.log(movies);

// movies.forEach((movie) => {
//   return `<div class="card">
//                                 <img src="assets/spiderman.jpg" alt="Browse">
//                                 <div class="card-content">
//                                     <div class="rating">
//                                         <h2>Spiderman</h2>
//                                         <p>7.6</p>
//                                     </div>
//                                     <p>23 Januari 2005
//                                     </p>
//                                 </div>
//                             </div>`;
// });
