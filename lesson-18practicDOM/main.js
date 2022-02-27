'use strict';
const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      heartOne = document.querySelector('.hear'),
      heart = document.querySelectorAll('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';


// buttons[1].style.borderRadius = '30px';

// Если мы хотим перебрать коллекцию которая была собрана через getElementsByCLassName или getElementsByTagName, на них не работает forEach только for перебирать
