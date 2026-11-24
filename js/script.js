"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt(
      "How many movies have you watched yet?",
      "2",
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How many movies have you watched yet?",
        "2",
      );
    }
  },

  rememberMyFilms: function () {
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
        personalMovieDB.movies[question1] = rating1;
      }
    }
  },

  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("You've watched not that many movies!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You're just an average movies lover");
    } else if (personalMovieDB.count >= 30) {
      console.log("You're addicted to movies, dude!");
    } else {
      console.log("Occurred an error!");
    }
  },

  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },

  toggleVisibleMyDB: function () {
    personalMovieDB.privat = !personalMovieDB.privat;
  },

  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let favGenre = prompt(`Name your fav genre under the number ${i + 1}`);

      if (favGenre === null || favGenre.trim() === "") {
        console.log("Invalid input. Please try again.");
        i--;
      } else {
        personalMovieDB.genres[i] = favGenre.trim();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre #${i + 1} is ${item}`);
    });
  },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
