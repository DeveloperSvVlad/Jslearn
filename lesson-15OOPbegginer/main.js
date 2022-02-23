'use strict'

let str = 'some';
let strObj = new Object(str);

console.log(typeof(str));
console.log(typeof(strObj));




const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

// const john = {
//     health: 100,
// }
// старый способ прототипирование. Получение от объекта каких либо свойств от основного прототипа и передача другим
// john.__proto__ = soldier;

// console.log(john.armor);
// john.sayHello()

// Способ которым пользуется сейчас Object.setPrototypeOf(Первым параметрам указывается новый объект, а вторым на который мы ссылаемся прототипирование)

// Object.setPrototypeOf(john, soldier);
// john.sayHello()
// console.log(john.armor);


// Способ более лучший который сразу ссылается на прототипированный объект

const jonh = Object.create(soldier)
jonh.sayHello();

