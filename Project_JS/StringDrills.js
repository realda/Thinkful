'use strict';

function wisePerson(wiseType, whatToSay) {
    return 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
}


function shouter(whatToShout) {
    let shoutMessage = whatToShout + '!!!';
    return shoutMessage.toUpperCase();
}


function textNormalizer(text) {
    return text.trim().toLowerCase();
}