/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

// 1) Задача удалить баннеры

const allPromoBanners = document.querySelectorAll('.promo__adv > img');
allPromoBanners.forEach(item => {
    item.remove();
})

// 2) Задача поменять текст
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';

// 3) Задача 3 поменять фон
const bgPromo = document.querySelector('.promo__bg');
bgPromo.style.backgroundImage = 'url(img/bg.jpg)';


// 4) Задача

const listMovies = document.querySelector('.promo__interactive-list');
listMovies.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {   
    //! Можно таким способом и потом аппендить
    let items = `
    <li class="promo__interactive-item">${item}
         <dv class="delete"></dv>
    </li>` 
    //! Или таким способом
    // listMovies.innerHTML += `
    // <li class="promo__interactive-item">${i + 1 + '.'} ${item}
    //         <dv class="delete"></dv>
    // </li>
    // `
    listMovies.insertAdjacentHTML('beforeend', items)
})

