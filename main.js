"use strict";
let prompt = require('prompt');
prompt.start();
prompt.get(['num1', 'num2', 'op'], function (err, result) {
    if (result.op === '+') {
        console.log(Number(result.num1) + Number(result.num2));
    }
    else if (result.op === '-') {
        console.log(Number(result.num1) - Number(result.num2));
    }
    else if (result.op === '*') {
        console.log(Number(result.num1) * Number(result.num2));
    }
    else if (result.op === '/') {
        console.log(Number(result.num1) / Number(result.num2));
    }
    console.log('Command-line input received:');
    console.log('num1: ' + result.num1);
    console.log('num2: ' + result.num2);
});
let user1 = {
    name: "Anwar",
    age: 24,
    Specialization: ["anwar", "anwar", "anwar"]
};
console.log("my age :", user1.age);
console.log("my best frind :", user1.Specialization);
