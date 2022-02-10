'use strict';

// Передача данных по ссылке и значению
let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
}
// const copy = obj; // ссылка на существующий объект
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// Фукнция при помощи которой мы можем создать новый объект перебирая старые свойства в старом объекте
function copy (mainObj) {
    let objCopy = {};
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4,
    }
}
const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);


// Чтоб объединить объекты есть метод Object.assign(): первый аргумент наш основной объект, а вторым аргументов тот который добавляем в текущий

const add = {
    k: 25,
    p: 30,
}
console.log(Object.assign(numbers, add));



// Создание копия массива
const oldArray = ['a', 'b', 'c'];
// slice позволяет скопировать массив, и если в неём происходят изменение он не затрагивает старый
const newArray = oldArray.slice();
newArray[1] = 'addadsada'
console.log(newArray);
console.log(oldArray);

// Есть и другой вариант через spred
// const oldArray = ['a', 'b', 'c'];
// const newArray = [...oldArray];
// newArray[2] = 'dsadasdasdasdasd';
// console.log(newArray);
// console.log(oldArray);





// Оператор spread, разворчивает структуру и превращает его в набор данных

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// Условно задача что у нас есть функуция в которую нужно передавать именно 3 аргумента, но с сервера приходит 1 массив, и приходит на помощь spread оператор который развернет наш массив и подставит в аргументы
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);


      


