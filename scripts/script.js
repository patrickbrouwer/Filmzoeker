console.log(movies); // test of de database al objecten zijn (Ja)

function addMoviesToDom() {
  movies.forEach(movie => {
    let a = document.createElement("a");
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    let listName = document.getElementById("result-posters");
    listName.appendChild(a);
    a.appendChild(img);
  });
}
addMoviesToDom();

function removeAllItems() {
  document.getElementById("result-posters").innerHTML = "";
}

const addFilteredMovies = function addFilteredMovies(filteredMovie) {
  const movieFilter = movies.filter(name => name.Title.includes(filteredMovie));

  movieFilter.forEach(function(movie) {
    let a = document.createElement("a");
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    let listName = document.getElementById("result-posters");
    listName.appendChild(a);
    a.appendChild(img);
  });
};

const addNewMovies = function addNewMovies() {
  const newMovies = movies.filter(name => parseInt(name.Year) >= 2014);

  newMovies.forEach(function(movie) {
    let a = document.createElement("a");
    a.setAttribute("target", "_blank");
    let img = document.createElement("img");
    a.href = "http://www.imdb.com/title/" + movie.imdbID;
    img.src = movie.Poster;
    let listName = document.getElementById("result-posters");
    listName.appendChild(a);
    a.appendChild(img);
  });
};

function FilmFilter() {
  let all_films = document.querySelector("#btn_filter #all_films");

  all_films.addEventListener("change", function() {
    removeAllItems();
    addMoviesToDom();
  });
}

let newest_films = document.querySelector("#btn_filter #newest_films");

newest_films.addEventListener("change", function() {
  removeAllItems();
  addNewMovies();
});

let avengers_films = document.querySelector("#btn_filter #avengers_films");

avengers_films.addEventListener("change", function() {
  removeAllItems();
  addFilteredMovies("Avengers");
});

let xmen_films = document.querySelector("#btn_filter #xmen_films");

xmen_films.addEventListener("change", function() {
  removeAllItems();
  addFilteredMovies("X-Men");
});

let princess_films = document.querySelector("#btn_filter #princess_films");

princess_films.addEventListener("change", function() {
  removeAllItems();
  addFilteredMovies("Princess");
});

let batman_films = document.querySelector("#btn_filter #batman_films");

batman_films.addEventListener("change", function() {
  removeAllItems();
  addFilteredMovies("Batman");
});

FilmFilter();
