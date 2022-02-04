'use strict';

function learnJs (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}
learnJs('Javascript', done)

