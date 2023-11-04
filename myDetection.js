function detection(val) {
    if (typeof val === "string") {
        return val;
    }
    else {
        return val;
    }
}
function provideId(id) {
    if (!id) {
        console.log("Provide id");
    }
    else {
        id.toLowerCase();
    }
}
//for class checking
function logValue(val) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
    }
    else {
        console.log(val.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
var fish = {
    swim: function () {
        console.log("swimming");
    },
};
var bird = {
    fly: function () {
        console.log("flying");
    },
};
move(fish);
move(bird);
