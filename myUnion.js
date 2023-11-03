"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 44;
score = "44";
var user = { name: "John", age: 25 };
user = { username: "John", id: 25 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
