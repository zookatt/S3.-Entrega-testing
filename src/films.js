// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(function (movies) {
    return movies.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter((movie) => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesByDirector = getMoviesFromDirector(movies, director);
  const totalScore = moviesByDirector.reduce((totalScore, movie) => totalScore + movie.score, 0);
  const averageScore = moviesByDirector.length === 0 ? 0 : parseFloat((totalScore / moviesByDirector.length).toFixed(2));
  console.log("EXERCICE 3 ->", averageScore);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const copiedMovies = [...movies];//Copiar el array original
  const sortedMovies = copiedMovies.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);//Ordenar array copiado de objetos
  const result = sortedMovies.map(movie => movie.title);//extraer solo titulos y crear nuevo array
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const copiedMovies = [...movies];//Copiar el array original
  const orderedByYear = copiedMovies.sort((a, b) => {
    if (a.year - b.year !== 0) {
      return a.year - b.year;//ordenar por año
    } else {
      return a.title.localeCompare(b.title);//películas que tienen el mismo año,se ordenan alfabéticamente.
    }
  });
  console.log("EXERCICE 5 ->", orderedByYear);
  return orderedByYear;//devuelve un array de películas ordenadas por año.
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const genresOfMovies = movies.filter((movie) => movie.genre.includes(category));
  const totalScoreByCategory = genresOfMovies.reduce((totalScore, movie) => totalScore + movie.score, 0);
  const averageScoreByCategory = genresOfMovies.length === 0 ? 0 : parseFloat((totalScoreByCategory / genresOfMovies.length).toFixed(2));
  console.log("EXERCICE 6 ->", averageScoreByCategory);
  return averageScoreByCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result = movies.map(function (movie) {
    let durationInMinutes;
    
    if (movie.duration.includes('h') && movie.duration.includes('min')) {
      const hours = parseInt(movie.duration.slice(0, movie.duration.indexOf('h')));
      const minutes = parseInt(movie.duration.slice(movie.duration.indexOf('h') + 1, movie.duration.indexOf('min')));
      durationInMinutes = hours * 60 + minutes;
    } else if (movie.duration.includes('h')) {
      const hours = parseInt(movie.duration.slice(0, movie.duration.indexOf('h')));
      durationInMinutes = hours * 60;
    } else if (movie.duration.includes('min')) {
      const minutes = parseInt(movie.duration.slice(0, movie.duration.indexOf('min')));
      durationInMinutes = minutes;
    } else {
      durationInMinutes = parseInt(movie.duration);
    }
    return {
      ...movie,
      duration: durationInMinutes
    };
  });
  console.log("EXERCISE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesByYear = movies.filter((movie) => movie.year === year);
  const moviesByScore = Math.max(...moviesByYear.map((movie) => movie.score));
  const bestMovie = moviesByYear.length === 0 ? 0 : moviesByYear.filter((movie) => movie.score === moviesByScore);
  console.log("EXERCISE 8 ->", bestMovie);
  return bestMovie;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
