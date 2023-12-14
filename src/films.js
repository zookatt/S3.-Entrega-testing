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
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
