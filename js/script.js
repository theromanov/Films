"use strict";

const numberOfFilms = +prompt("How many movies have you watched yet?", "2"),
  personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

for (let i = 0; i < 2; i++) {
  let question1 = prompt("Name one of the recent movies you watched", ""),
    rating1 = prompt("Rate the movie", "");

  if (
    question1 === null ||
    question1.trim() === "" ||
    rating1 === null ||
    rating1.trim() === "" ||
    question1.length > 50
  ) {
    i--;
  } else {
    personalMovieDB["movies"][question1] = rating1;
  }
}

if (personalMovieDB.count < 10) {
  console.log("You've watched not that many movies!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You're just an average movies lover");
} else if (personalMovieDB.count >= 30) {
  console.log("You're addicted to movies, dude!");
} else {
  console.log("Occured an error!");
}

console.log(personalMovieDB);
