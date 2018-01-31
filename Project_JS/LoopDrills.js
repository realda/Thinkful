'use strict';

function max(numbers) {
    let maxValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }
    return maxValue;
}

function min(numbers) {
    let minValue = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minValue) {
            minValue = numbers[i];
        }
    }
    return minValue;
}

function testMaxMinFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.log(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

function runMaxMinTests() {
    // we'll use the variables in our test cases
    var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
    var realMin1 = numList1[3];
    var realMax1 = numList1[6];
    var numList2 = [0, 1, 2, 3, 4];
    var realMin2 = numList2[0];
    var realMax2 = numList2[4];

    var testResults = [
        testMaxMinFunctionWorks(max, numList1, realMax1),
        testMaxMinFunctionWorks(max, numList2, realMax2),
        testMaxMinFunctionWorks(min, numList1, realMin1),
        testMaxMinFunctionWorks(min, numList2, realMin2),
    ];

    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function testAverageFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.log(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

function runAverageTests() {
    var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var correctAns1 = 5.5;
    var numList2 = [0, -1, 1];
    var correctAns2 = 0;

    var testResults = [
        testAverageFunctionWorks(average, numList1, correctAns1),
        testAverageFunctionWorks(average, numList2, correctAns2)
    ];
    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function fizzBuzz(countTo) {
    let array = [];
    for (let i = 1; i <= countTo; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            array.push('fizzbuzz');
        }
        else if (i % 3 == 0) {
            array.push('fizz');
        }
        else if (i % 5 == 0) {
            array.push('buzz');
        }
        else {
            array.push(i);
        }
    }
    return array;
}

function testFizzBuzz() {
    // we'll use the variables in our test cases
    var countTo = 16;
    var expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];

    var actual = fizzBuzz(countTo) || [];

    if (
        expected.length === actual.length &&
        expected.every(function (item, index) {
            return actual[index] === item;
        })) {

        return 'SUCCESS: fizzBuzz is working';
    }
    else {
        return 'FAILURE: fizzBuzz is not working';
    }
}