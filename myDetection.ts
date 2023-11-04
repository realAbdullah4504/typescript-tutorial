function detection(val: string | number): string | number {
  if (typeof val === "string") {
    return val;
  } else {
    return val;
  }
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Provide id");
  } else {
    id.toLowerCase();
  }
}

//for class checking
function logValue(val: Date | string) {
  if (val instanceof Date) {
    console.log(val.toUTCString());
  } else {
    console.log(val.toUpperCase());
  }
}
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish { //pet is fish returning boolean for the fish
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
const fish: Fish = {
  swim() {
    console.log("swimming");
  },
};
const bird: Bird = {
  fly() {
    console.log("flying");
  },
};

move(fish);
move(bird);
