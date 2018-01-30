'use strict';

function computeArea(width, height) {
    return width * height;
}


function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}


function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}


function isDivisible(divisee, divisor) {
    return divisee % divisor === 0;
}