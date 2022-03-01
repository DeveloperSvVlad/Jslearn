/* Задания на урок:

1) Реализовать функционал, что после заполнение формы и нажатие на кнопку Подтвердить фильм добавляется в список. Страница не перезагружается
Новый фильм должен добавляться в movieDB.movies

2) Если название фильма больше, чем 21 символ - обрезать его и добавить 3 точки


3) При клике на мусорную корзину - элемент будет удаляться из списка(Сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщения 'Добавляем любимый фильм' 

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    const listMovies = document.querySelector('.promo__interactive-list'),
          formAdd = document.querySelector('.add'),
          adding__input = formAdd.querySelector('.adding__input'),
          checkbox = formAdd.querySelector('input[type=checkbox]');


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Новые задачи по текущему уроку  
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        const favorite = checkbox.checked;
        let newFilm = adding__input.value;  
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, listMovies)
        } 
        event.target.reset();
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }
    })

    function createMoviesList (films, parent)  {
        parent.innerHTML = "";
        films.forEach((film, i) => {   
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1 + '.'} ${film}
                <div class="delete"></div>
            </li>
            `
        })
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', function () {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviesList(movieDB.movies, listMovies)
            })
        })       
    }
    function sortArr (arr) {
        arr.sort();
    }   
    sortArr(movieDB.movies)
    createMoviesList(movieDB.movies, listMovies);
})


