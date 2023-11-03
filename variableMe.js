"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello";
//not necessary to put the :string here it automatically figures it out
console.log(greetings);
// if we want anything else from the function we need to setup its type
var abcd;
var setAbcd = function () {
    return "hello";
};
abcd = setAbcd();
console.log(abcd);
// for the function we need to set the type of the variable
var asd = function (no) {
    return no + 2;
};
var qwe;
qwe = asd(2);
// for the function
function signUpUser(name, age, isMarried) { }
signUpUser("asds", 123, true);
//if we send two arguments it gives the error to resolve it
function signUpUser1(name, age, isMarried) {
    if (isMarried === void 0) { isMarried = false; }
}
signUpUser1("asds", 25);
// for the non returning type
var consoleError = function (err) {
    return console.log(err);
};
consoleError('hello');
