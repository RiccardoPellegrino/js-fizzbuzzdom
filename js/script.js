"use strict";

let html = '';

const div = document.querySelector("div");
div.className= div.classList + " ciao ";

for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        let elemento = document.createElement('div4');
        elemento.className = `box--${i}`;
        elemento.append(`FizzBuzz `);
        div.append(elemento);
        console.log("FizzBuzz");
    }

    else if (i % 3 == 0) {
        let elemento = document.createElement('div1');
        elemento.className = `box--${i}`;
        elemento.append(`Fizz `);
        div.append(elemento);
        console.log("Fizz");
    }

    else if (i % 5 == 0) {
        let elemento = document.createElement('div2');
        elemento.className = `box--${i}`;
        elemento.append(`Buzz `);
        div.append(elemento);
        console.log("Buzz");
    }

    else {
        let elemento = document.createElement('div3');
        elemento.className = `box--${i}`;
        elemento.append(` ${i}`);
        div.append(elemento);
        console.log(i)
    }

};