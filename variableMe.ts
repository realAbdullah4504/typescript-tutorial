let greetings: string = "Hello";
//not necessary to put the :string here it automatically figures it out
console.log(greetings);

// if we want anything else from the function we need to setup its type
let abcd: string;

const setAbcd = () => {
  return "hello";
};

abcd = setAbcd();
console.log(abcd);

// for the function we need to set the type of the variable
const asd = (no: number) => {
  return no + 2;
};

let qwe: number;
qwe = asd(2);

// for the function
function signUpUser(name: string, age: number, isMarried: boolean) {}
signUpUser("asds", 123, true);

//if we send two arguments it gives the error to resolve it
function signUpUser1(name: string, age: number, isMarried: boolean = false) {}
signUpUser1("asds", 25);

// for the non returning type
const consoleError = (err: string): void => {
  return console.log(err);
};
consoleError("hello");

export {};
