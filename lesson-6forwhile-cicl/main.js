'use strict';
//? Циклы

let num = 50;

//? While цикл (Пока что у нас условие выполняется мы будем делать действие)
// while(num <= 55) {
//     console.log(num);
//     num++
// }


//? Цикл For 
for (let index = 1; index <= 8; index++) {
    console.log(index);
}
//? Цикл for с условием 
for (let index = 1; index <= 8; index++) {
    if (index === 6) {
        // Выход с цикла
        // break;
        // Continuim позволяет нам пропустить то что мы указали и продолжит цикл
        continue;
    }
    console.log(index);
}