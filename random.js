"use strict";
exports.__esModule = true;
function random1() {
    var input1 = document.getElementById("min");
    var input2 = document.getElementById("max");
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var a = Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
    var result = +a;
    var NumberLucky = document.getElementById("result");
    NumberLucky.innerHTML = String(result);
}
