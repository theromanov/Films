"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you watched yet?", "2");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you watched yet?", "2");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let question1 = prompt(
        "Name one of the recent movies you watched",
        "",
      ).trim(),
      rating1 = prompt("Rate the movie", "").trim();

    if (
      question1 === null ||
      question1 === "" ||
      rating1 === null ||
      rating1 === "" ||
      question1.length > 50
    ) {
      i--;
    } else {
      personalMovieDB["movies"][question1] = rating1;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("You've watched not that many movies!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You're just an average movies lover");
  } else if (personalMovieDB.count >= 30) {
    console.log("You're addicted to movies, dude!");
  } else {
    console.log("Occured an error!");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let favGenre = prompt(
      `Name your fav genre under the number ${i + 1}`,
    ).trim();
    personalMovieDB.genres[i] = favGenre;
  }
}

writeYourGenres();
