'use strict';

function makeList(item1, item2, item3) {
    return [item1, item2, item3];
}

function testMakeList() {

    var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
    var result = makeList(items[0], items[1], items[2]);

    if (result && result.length && items.length === result.length &&
        items.every(function (item) {
            return result.indexOf(item) > -1;
        })) {
        return 'SUCCESS: `makeList` works!';
    }
    else {
        return 'FAILURE: `makeList` is not working';
    }
}


function addToList(list, item) {
    list.push(item);
    return list;
}

function testAddToList() {

    var input1 = ["red", "blue", "green"]
    var input2 = "pink"
    var expected = ["red", "blue", "green", "pink"]
    var result = addToList(input1, input2);

    if (result && result.length && expected.length === result.length &&
        expected.every(function (item) {
            return result.indexOf(item) > -1;
        })) {
        return 'SUCCESS: `addToList` works!';
    }
    else {
        return 'FAILURE: `addToList` is not working';
    }
}


function accessFirstItem(array) {
    return array[0];
}

function accessThirdItem(array) {
    return array[2];
}

function testAccessFunctionWorks(fn, input, expected) {

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

function runAccessTests() {

    var list = [1, 4, 9, 16, 25]
    var item1 = 1
    var item2 = 9

    var testResults = [
        testAccessFunctionWorks(accessFirstItem, list, item1),
        testAccessFunctionWorks(accessThirdItem, list, item2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function findLength(array) {
    return array.length;
}

function accessLastItem(array) {
    return array[array.length - 1];
}

function testLengthFunctionWorks(fn, input, expected) {

    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.error(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

function runLengthTests() {

    var list = [1, 4, 9, 16, 25];
    var originalList = [1, 4, 9, 16, 25];
    var length = 5;
    var lastItem = 25;

    var testResults = [
        testLengthFunctionWorks(findLength, list, length),
        testLengthFunctionWorks(accessLastItem, list, lastItem),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function firstFourItems(array) {
    return array.slice(0, 4);
}

function lastThreeItems(array) {
    return array.slice(Math.max(array.length - 3, 1))
}

function testCopy1FunctionWorks(fn, input, expected) {

    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!')
        return true;
    }
    else {
        console.error('FAILURE: `' + fn.name + '` is not working')
        return false;
    }
}

function runCopy1Tests() {

    var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
    var result1 = ["red bull", "monster", "amp", "rockstar"];
    var result2 = ["amp", "rockstar", "full throttle"];

    var testResults = [
        testCopy1FunctionWorks(firstFourItems, list, result1),
        testCopy1FunctionWorks(lastThreeItems, list, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function minusLastItem(array) {
    return array.slice(0, array.length - 1);
}

function copyFirstHalf(array) {
    return array.slice(0, Math.floor(array.length / 2));
}

function testCopy2FunctionWorks(fn, input, expected) {
    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!');
        return true;
    } else {
        console.error('FAILURE: `' + fn.name + '` is not working');
        return false;
    }
}

function runCopy2Tests() {

    var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
    var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
    var result2 = ["red bull", "monster", "amp"];

    var testResults = [
        testCopy2FunctionWorks(minusLastItem, list, result1),
        testCopy2FunctionWorks(copyFirstHalf, list, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function squares(array) {
    return array.map(function (a) {
        return a * a;
    });
}

function testMapFunctionWorks(fn, input, expected) {

    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!')
        return true;
    }
    else {
        console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input))
        return false;
    }
}

function runMapTests() {

    var input1 = [1, 2, 3, 4, 5];
    var result1 = [1, 4, 9, 16, 25];
    var input2 = [2, 4, 6, 8];
    var result2 = [4, 16, 36, 64];

    var testResults = [
        testMapFunctionWorks(squares, input1, result1),
        testMapFunctionWorks(squares, input2, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function sortFromGreatestToLeast(array) {
    return array.sort(function (a, b) {
        return b - a;
    })
}

function testSortFunctionWorks(fn, input, expected) {
    var result = fn(input);
    if (
        result &&
        result.length === expected.length &&
        result.every(function (item, index) {
            return (index === 0 || result[index] < result[index - 1]);
        }) &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!')
        return true;
    }
    else {
        console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input))
        return false;
    }
}

function runSortTests() {

    var input1 = [10, 3, 5, 22, 19];
    var result1 = [22, 19, 10, 5, 3];
    var input2 = [2, 4, 6, 8];
    var result2 = [8, 6, 4, 2];

    var testResults = [
        testSortFunctionWorks(sortFromGreatestToLeast, input1, result1),
        testSortFunctionWorks(sortFromGreatestToLeast, input2, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function shortWords(array) {
    return array.filter(function (a) {
        return a.length < 5;
    })
}

function testFilterFunctionWorks(fn, input, expected) {

    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!')
        return true;
    }
    else {
        console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input))
        return false;
    }
}

function runFilterTests() {

    var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
    var result1 = ['cat', 'dog', 'blue'];
    var input2 = ['rainbow', 'the', 'big'];
    var result2 = ['the', 'big'];

    var testResults = [
        testFilterFunctionWorks(shortWords, input1, result1),
        testFilterFunctionWorks(shortWords, input2, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}


function divisibleBy5(array) {
    return array.find(function (a) {
        return a % 5 === 0;
    });
}

function testFindFunctionWorks(fn, input, expected) {

    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    }
    else {
        console.error(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

function runFindTests() {

    var input1 = [13, 22, 4, 47, 15, 35, 82];
    var result1 = 15;
    var input2 = [25, 20, 15, 10, 5];
    var result2 = 25;

    var testResults = [
        testFindFunctionWorks(divisibleBy5, input1, result1),
        testFindFunctionWorks(divisibleBy5, input2, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    return numPassing + ' out of ' + testResults.length + ' tests passing.';
}
