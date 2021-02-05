const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов', ''),
      b = prompt('На сколько оенете кго?', ''),
      c = prompt('Один из последних просмотреных фильмов', ''),
      d = prompt('На сколько оенете кго?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);