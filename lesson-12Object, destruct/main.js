'use strict';



// Создаём объект options
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    //У объектов есть методы, но мы так же можем создавать их сами
    makeTest: function () {
        console.log('Hello world');
    }
}
// Тут мы вызываем наш метод у нашего объекта
options.makeTest();


// Мы можем удалять что-то из объекта через delete
// delete options.name;
// console.log(options);

//? У объектов есть метод object.keys() берет наш объект и на его основание создает массив которым все элементы находящийся на первоем значение (Ключи) и тут же мы можем узнать длину нашего массива (Объекта)
console.log(Object.keys(options).length);

// Чтоб вытащить конкретную область из объекта мы можем воспользоваться деструктиризацией 
const {border, bg} = options.colors;
console.log(border);


// Переборка объекта через цикл for in чтоб узнать каждый ключ
// for (let key in options) {
     // Но есть нюанс, внутри option у нас лежит ещё один вложенный объект и в консоль он нам выдает object object, чтоб этого избежать надо пройтись циклом ещё раз c условием на проверку object
     // Это можно сделать и иначе но этот способ не очень красив 
     // console.log(options["colors"]["bg"]);
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Тут лежат ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Тут лежат ${key} имеет значение ${options[key]}`);
//     }    
// }


