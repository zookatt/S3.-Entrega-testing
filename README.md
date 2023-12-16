# Sprint 3 IT Academy | Video management tool

## Introduction

A company in the audiovisual sector has asked us for a web application that will allow their employees to quickly find movies from a large database they have, since the process is currently done manually.

You will be in charge of setting up the core of the application: all the logic of filtering and sorting of movies. You have 2 weeks to finish, which is how long this sprint lasts.

<br>

## Requirements


1. Clone this repo
```bash
$ git clone https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies
```

2. Unlink your repo from the itacademy repository
```bash
$ git remote rm origin
```

3. Link your repo to the repository you have to create in your github account
```bash
$ git remote add origin <your repo name!>
```

<br>

## Submission

1. Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m "Sprint Solution"
$ git push origin master
```

2. Create Pull Request.

3. Upload the link to the virtual campus so that your mentor can correct it and give you feedback.



<br>

## Introduction

The statement of the exercise is available on the virtual campus.

<br>

## Tests!


```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Instructions

You have the following indications from the frontend responsible:

- It is mandatory to implement all loops in ES6 (using map, reduce, filter and sort to manipulate arrays).

- As at the moment we don't consume data from a server using an API, we will work with data from the src/data.js archive. For the moment we will implement the logic using
an array of information about 250 movies.

- The implementation is about processing this array of movies, to display it as requested in each exercise.

- The logic to implement will be placed in the src/films.js file.

- You don't need to show the result of each function on the screen. Your goal is to pass the tests.  More information on how to program oriented to pass tests at the end of the document.

- Don't forget to include the capture of the test results in the virtual campus.


## Solutions

Functions:
----------

### 1\. `getAllDirectors(movies)`

*   **Description:** Returns the array of all directors.
*   **Methods Used:**
    *   `map`: Extracts the director information from each movie object.
*   **Usage:** `getAllDirectors(movies)`
*   **Example:**
    ```bash
    `const directors = getAllDirectors(movies);`
    ```

### 2\. `getMoviesFromDirector(movies, director)`

*   **Description:** Returns an array of movies directed by a specified director.
*   **Methods Used:**
    *   `filter`: Filters movies based on the specified director.
*   **Usage:** `getMoviesFromDirector(movies, director)`
*   **Example:**
    ```bash 
    `const directorMovies = getMoviesFromDirector(movies, 'Christopher Nolan');`
    ```

### 3\. `moviesAverageOfDirector(movies, director)`

*   **Description:** Calculates the average score of movies directed by a specified director.
*   **Methods Used:**
    *   `getMoviesFromDirector`: Returns an array of movies directed by a specified director.
    *   `reduce`: Calculates the total score of movies.
*   **Usage:** `moviesAverageOfDirector(movies, director)`
*   **Example:**
    ```bash
    `const averageScore = moviesAverageOfDirector(movies, 'Quentin Tarantino');`
    ```

### 4\. `orderAlphabetically(movies)`

*   **Description:** Orders movies alphabetically by title and returns an array of titles.
*   **Methods Used:**
    *   `sort`: Alphabetically sorts movies based on title.
    *   `slice`: Limits the result to the top 20 titles.
*   **Usage:** `orderAlphabetically(movies)`
*   **Example:**
    ```bash
    `const sortedTitles = orderAlphabetically(movies);`
    ```

### 5\. `orderByYear(movies)`

*   **Description:** Orders movies by year in ascending order.
*   **Methods Used:**
    *   `sort`: Sorts movies by year, and then alphabetically if years are equal.
*   **Usage:** `orderByYear(movies)`
*   **Example:**
    ```bash
    `const orderedMovies = orderByYear(movies);`
    ```

### 6\. `moviesAverageByCategory(movies, category)`

*   **Description:** Calculates the average score of movies in a specified category.
*   **Methods Used:**
    *   `filter`: Filters movies based on the specified category.
    *   `reduce`: Calculates the total score of movies in the category.
*   **Usage:** `moviesAverageByCategory(movies, category)`
*   **Example:**
    ```bash
    `const averageScore = moviesAverageByCategory(movies, 'Action');`
    ```

### 7\. `hoursToMinutes(movies)`

*   **Description:** Converts movie durations from hours and minutes to total minutes.
*   **Methods Used:**
    *   `map`: Iterates through movies and converts duration.
*   **Usage:** `hoursToMinutes(movies)`
*   **Example:**
    ```bash
    `const moviesInMinutes = hoursToMinutes(movies);`
    ```

### 8\. `bestFilmOfYear(movies, year)`

*   **Description:** Retrieves the best-rated movie of a specified year.
*   **Methods Used:**
    *   `filter`: Filters movies based on the specified year.
    *   `Math.max` and `map`: Finds the movie with the highest score.
*   **Usage:** `bestFilmOfYear(movies, year)`
*   **Example:**
    ```bash
    `const bestMovie = bestFilmOfYear(movies, 2020);`
    ```

## Unit test for function .6\ `moviesAverageByCategory(movies, category)`
This unit test checks the functionality of the `moviesAverageByCategory` function.

Test Cases:
-----------

1.  **Declaration Test:**
    
    *   The function should be declared.
    ```bash
    `it('should be declared', () => {   expect(typeof moviesAverageByCategory).toBe('function'); });`
    ```
2.  **Return Type Test:**
    
    *   The function should return a number.
    ```bash
    `it('should return a number', () => {   expect(typeof moviesAverageByCategory(movies, 'Drama')).toBe('number'); });`
    ```
3.  **NaN Check Test:**
    
    *   The result should not be NaN.

    ```bash
    `it('should be different from NaN', () => {   expect(moviesAverageByCategory(movies, 'Drama')).not.toBeNaN(); });`
    ```
4.  **Average Score Calculation Test:**
    *   The function should return the correct average score of movies in a certain genre with two decimal places.
  
    ```bash
    `it('should return the average score of movies of a certain genre. With 2 decimals! ', () => {   expect(moviesAverageByCategory([     { title: 'Paths of Glory', year: 1957, genre: ['Drama', 'War'], score: 8.4 },     { title: 'Django Unchained', year: 2012, genre: ['Drama', 'Western'], score: 8.4 },     { title: 'Pulp Fiction', year: 1994, genre: ['Crime', 'Drama'], score: 8.9 }   ], 'Drama')).toBe(8.57); });`
    ```