"use strict";
// const score:string[]=[]
// const score1:Array<number>=[]
Object.defineProperty(exports, "__esModule", { value: true });
function printArray(items) {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
printArray([1, 2, 3, 4]);
function print(num) {
    console.log(num);
}
print("1");
function printBottle(bottle) {
    console.log(bottle);
}
printBottle({ name: "bottle", price: 100 });
function printArray1(items) {
    return items[0];
}
var printArray2 = function (items) {
    return items[0];
};
//generic classes
var GenericClass = /** @class */ (function () {
    function GenericClass(name) {
        this.name = name;
    }
    GenericClass.prototype.print = function () {
        console.log(this.name);
    };
    return GenericClass;
}());
var hello = new GenericClass("hello");
hello.print();
