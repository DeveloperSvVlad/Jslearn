'use strict'

//? Свойства length, узнать длинну тип данных
const str = 'test';
const arr = [1, 2, 3];
console.log(str.length);
console.log(arr.length);


//? Методы строк

const strTest = 'test'
// К большему регистриу или к нижниму
console.log(strTest.toUpperCase());
console.log(strTest.toLowerCase());

//? Метод indexOf() узнать с какого индекса начинается, или же узнать существует ли вообще там что-то из этого
const fruit = 'Some fruit';
// Начнется с 5 индекса
console.log(fruit.indexOf('fruit'));
// Не найдет ничего -1
console.log(fruit.indexOf('q'));


//? Важные методы

const logg = "Hello world";
// Slice принимает два значение 1: Какое часть строки необходимо возвращать 2: Где заканчивать вырезание 
console.log(logg.slice(6, 11));

// SubString  принимает два значение 1: Какое часть строки необходимо возвращать 2: Где заканчивать вырезание (Отличие от slice не поддерживает отрицательные значения)
console.log(logg.substring(6, 11));

// SubStr принимает два значение 1: Какое часть строки необходимо возвращать 2: Какое количество надо вырезать
console.log(logg.substr(6, 5));


//? Методы чисел

const num = 50.5;
// Math.round округляет до целого ближайшего числа
console.log(Math.round(num));

const test = '12.2px';
// parseInt переводит число в другую систему вычесления
console.log(parseInt(test));
// parseFloat берет число или строку и вернет нам в десятичным варианте
console.log(parseFloat(test));



