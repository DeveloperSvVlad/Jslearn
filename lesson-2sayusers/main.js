'use strict';
//? Alert
let user = 'Vlad'
// alert('Привет ' + `${user}`);

//? Confirm
// Записывает значение, если пользователь нажимает на Ok(true), если жмёт отмена то (false);
// const result = confirm('Привет как твои дела ' + `${user}`);

//? Promt 
// const answer = +prompt('Вам есть 18?', '');
// console.log(typeof(answer)); // Пападает всегда строка, но если поставить +перед prompt, то будет выводить всегда number(Преобразование)

// Обычный тест код с вопросами
const answers = [];
answers[0] = prompt('Привет как тебя зовут? ', '');
answers[1] = prompt('Сколько тебе лет? ', '');
answers[2] = prompt('Какая у тебя фамилия? ', '');
document.write(answers);
console.log(answers);


