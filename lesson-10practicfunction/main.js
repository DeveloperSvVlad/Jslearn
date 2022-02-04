'use strict';
// Меняем и упрощаем функуционал в этом уроке

let numberOfFilmes;
// Функция старт проверяет на пустоту, на нажатие отмены и если пользователь ввёл буквы.
function start() {
    numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // Пока, что-то происходит или не происходит, мы будем выполнять какие либо действия
    while (numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)) {
        numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

// rememberMyFilm заносим наш цикл в функцию для читабельности
function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?');

        // Проверяем на пустое значение от пользователя и на длинну строки меньше чем 50, если всё верно, то даём пользователю ввод
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}
// rememberMyFilms();

// Проверяем на количество просмотренных фильмов и выводим сообщение
// Заносим все условия в функцию так же 
function decetPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// decetPersonalLevel();

// Функция которая проверяет на то, если наша база данных не скрыта мы ее показываем
// В аругмент передаем параметр, в который позже кладём нашу обьект personalMovieDB
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres () {
    for (let index = 1; index <= 3; index++) {
        const genre = prompt(`Ваш любимый жанр под номером ${index}`);
        personalMovieDB.genres[index - 1] = genre;
    }
}
writeYourGenres();
