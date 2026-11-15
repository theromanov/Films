"use strict";

const numberOfFilms = +prompt("How many movies have you watched yet?", "2"),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  },
  question1 = prompt("Name one of the recent movies you watched", ""),
  rating1 = +prompt("Rate the movie", ""),
  question2 = prompt("Name one of the recent movies you watched", ""),
  rating2 = +prompt("Rate the movie", "");

personalMovieDB["movies"][question1] = rating1;
personalMovieDB["movies"][question2] = rating2;

console.log(personalMovieDB);
