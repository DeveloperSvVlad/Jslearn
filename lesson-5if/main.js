'use strict';
//? Условие


if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Eror')
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Все верно');
}

//? Тернарный оператор
(num === 50) ? console.log('Все верно') : console.log('Error');


//? Switch конструкция, для избежения большой вложанности с if else if 

const testSwitch = 50;
// Можно работать не только с числами но и со строками
switch (testSwitch) {
    // Важно конструкция switch всегда идёт на строгое сравнение в отличие от обычных условий
   case 49: 
        console.log('Не верно');
        // Выход из case если условие верно с помощью break
        break;
   case 100: 
        console.log('Не верно');
        break;
   case 51: 
        console.log('Верно');
        break;
        // default используется для того если ни одно из условий не подошло (Подушка безопасноти);
   default: 
        console.log('Ничего не подошло');
        break;    
}