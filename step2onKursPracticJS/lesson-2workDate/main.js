'use strict';
// Текущая дата
const dateNow = new Date();

console.log(dateNow);
// Текущая дата, в дату можно передовать аргументы,
// Так же можем передавать параметры такие как(Год, месяц, дни и тд)
const newDate = new Date(2020, 5, 1, 20);
console.log(newDate);


// У даты много различных методов

const d = new Date();
// getFullYear() получим текущий год
// getDate() получим день
// getMounth() получим месяц
// getDay() получим день недели намерация начинается с воскресенья
// getHours() получим часы, если добавим UTC то получим время по UTC
// console.log(d.getFullYear());
// console.log(d.getDate());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getUTCHours());

// Разница между часовым поясом и UTC 
console.log(d.getTimezoneOffset());
// Количество милисекунд которые уже прошли
console.log(d.getTime());












