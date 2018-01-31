'use strict';

function makeStudentsReport(data) {
    return data.map(function (item) {
        return item.name + ': ' + item.grade;
    });
}

function testMakeStudentsReport() {

    var testData = [
        {name: 'Jane Doe', grade: 'A'},
        {name: 'John Dough', grade: 'B'},
        {name: 'Jill Do', grade: 'A'}
    ];

    var expectations = [
        'Jane Doe: A',
        'John Dough: B',
        'Jill Do: A'
    ];

    var results = makeStudentsReport(testData);

    if (!(results && results instanceof Array)) {
        console.error(
            'FAILURE: `makeStudentsReport` must return an array');
        return
    }
    if (results.length !== testData.length) {
        console.error(
            'FAILURE: test data had length of ' + testData.length +
            ' but `makeStudentsReport` returned array of length ' + results.length);
        return
    }
    for (var i = 0; i < expectations.length; i++) {
        var expect = expectations[i];
        if (!results.find(function (item) {
                return item === expect;
            })) {
            console.error(
                'FAILURE: `makeStudentsReport` is not ' +
                'producing expected strings'
            );
            return
        }
    }
    return 'SUCCESS: `makeStudentsReport` is working';
}

function enrollInSummerSchool(students) {
    students.forEach(function (student) {
        student.status = 'In Summer school';
    });

    return students;
}

function testEnrollInSummerSchool() {
    var testData = [
        {
            name: 'Burt',
            status: 'Playing hooky',
            course: 'Biology'
        },
        {
            name: 'Melanie',
            status: 'Sick',
            course: 'Mathematics'
        },
        {
            name: 'Leonard',
            status: 'AWOL',
            course: 'Computer science'
        }
    ];

    var results = enrollInSummerSchool(testData);

    if (!(results && results instanceof Array)) {
        console.error('FAILURE: `enrollSummerSchool` must return an array');
        return
    }

    for (var i = 0; i < testData.length; i++) {
        var result = results.find(function (_result) {
            return (
                _result.name === testData[i].name &&
                _result.course === testData[i].course &&
                _result.status === 'In Summer school');
        });
        if (!result) {
            console.error(
                'FAILURE: `enrollSummerSchool` should return ' +
                'original key/value pairs for each student, and ' +
                'update `status` to "In Summer school"');
            return
        }
    }
    return 'SUCCESS: `enrollSummerSchool` is working';
}


function findById(items, idNum) {
    return items.find(function (item) {
        return item.id === idNum;
    });
}

function testFindById() {
    var testData = [
        {id: 1, foo: 'bar'},
        {id: 2, foo: 'bizz'},
        {id: 3, bang: 'boo'}
    ];
    var result = findById(testData, 3);
    if (!(result && result !== null && typeof result === 'object')) {
        console.error('`findById` must return an object');
        return
    }
    if (result.id !== 3) {
        console.error(
            'Asked for item with id of `3` but got back one with id of ' +
            result.id
        );
        return
    }
    if (result.bang !== 'boo') {
        console.error('Expected all key/value pairs from target object to be returned');
        return
    }
    return 'SUCCESS: `findByid` is working';
}


var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
}


function validateKeys(object, expectedKeys) {
    let objectKeys = Object.keys(object);

    return objectKeys.length === expectedKeys.length && objectKeys.every(function (key) {
        return expectedKeys.includes(key);
    });
}

function testValidateKeys() {
    var objectA = {
        id: 2,
        name: 'Jane Doe',
        age: 34,
        city: 'Chicago'
    }

    var objectB = {
        id: 3,
        age: 33,
        city: 'Peoria'
    }

    var objectC = {
        id: 9,
        name: 'Billy Bear',
        age: 62,
        city: 'Milwaukee',
        status: 'paused'
    }

    var expectedKeys = [
        'id', 'name', 'age', 'city'
    ];

    if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
        console.error(
            'FAILURE: `validateKeys` should return a boolean value');
        return;
    }


    if (!validateKeys(objectA, expectedKeys)) {
        console.error(
            'FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `true` but returned `false`:\n' +
            objectA + '\n' + expectedKeys
        )
        return;
    }

    if (validateKeys(objectB, expectedKeys)) {
        console.error(
            'FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `false` but returned `true`:\n' +
            objectB + '\n' + expectedKeys
        );
    }

    if (validateKeys(objectC, expectedKeys)) {
        console.error(
            'FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `false` but returned `true`:\n' +
            objectC + '\n' + expectedKeys
        );
    }

    return 'SUCCESS: `validateKeys` is working';
}


function makeToDos(owner, toDos) {
    return {
        'owner': owner,
        'toDos': toDos,
        generateHtml: function () {
            return '<ul>' + toDos.map(function (toDo) {
                return '<li>' + toDo + '</li>';
            }) + '</ul>';
        }
    }
}

function testMakeToDos() {
    var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
    var owner = 'Steve';
    var myToDos = makeToDos(owner, toDos);
    if (!myToDos || !myToDos instanceof Object) {
        console.error('FAILURE: `makeToDos` must return an object');
        return;
    }

    var expectedKeys = ['owner', 'toDos', 'generateHtml'];
    var missingKeys = expectedKeys.filter(function (key) {
        return Object.keys(myToDos).indexOf(key) < 0;
    });

    if (missingKeys.length > 0) {
        console.error(
            'FAILURE: `makeToDos` missing following keys: ' + missingKeys.join(', '));
        return;
    }

    if (myToDos.owner !== owner) {
        console.error(
            'FAILURE: expected `makeToDos` to return an object with `.owner` ' +
            'set to value passed in for `owner`, in this case ' + owner);
        return;
    }
    if (!toDos.every(function (toDo) {
            return myToDos.toDos.find(function (_toDo) {
                return _toDo === toDo;
            })
        })) {
        console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
    }

    var element = $(myToDos.generateHtml());

    if (element.length !== 1) {
        console.error(
            'FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
            'method that returns an unordered list');
        return;
    }

    if (!toDos.every(function (toDo) {
            return element.find('li:contains("' + toDo + '")').length === 1;
        })) {
        console.error('FAILURE: generateHtml must return li element for every todo');
        return
    }

    return 'SUCCESS: `makeToDos` is working';
}
