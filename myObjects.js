"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "John",
    age: 25,
    isMarried: false,
};
var newUser = function (_a) {
    var string = _a.name, number = _a.age;
    return {
        name: "John",
        age: 25,
        isMarried: false,
    };
};
var newUser1 = { name: "John", age: 25, isMarried: false };
newUser(newUser1);
var newUser2 = function (user) {
    return {
        name: "John",
        age: 25,
        isMarried: false,
    };
};
newUser2({ name: "John", age: 25, isMarried: false });
