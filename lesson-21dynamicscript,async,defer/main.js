'use strict';

const p = document.querySelectorAll('p');

console.log(p);






function loadedSript (src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadedSript("test.js");
loadedSript("some.js");


