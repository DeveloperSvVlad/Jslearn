'use strict';

// Функция, в круглые скобки передаются аргументы функции
// Переменные внутри функции не доступны во вне функции (Блочная система), если создать глобальную то она будет доступна
let num = 20; // глобальная переменная, а внутри можно ее переиспользовать
function showFirstMessage () {
    console.log('Hello world');
    num = 30;
}
showFirstMessage();
// Функция с передачей аргументов
function showFirstMessageArg (text) {
    console.log(text);
}
showFirstMessageArg('Hello world');


// Функция с передачей аргументов и их возврат сразу же 
function calc(a, b) {
    return a + b;
}
console.log(calc(25, 25));


function ret () {
    let count = 20;
    return count;
}
// Храним значение функкции ret, исходя из return, а в retun лежит значение локальной переменной count
const anotherNum = ret();
console.log(anotherNum);


//? Выше были все переменные declaration

//? Exspression function работает только после объявления, и вызывать её раньше нельзя
const logger = function (params) {
  console.log('Hello');
};
logger();

//? Arrows function, не имеет своего контекста this
const calcul = (a, b) => a + b;

console.log(calcul(50, 50));

