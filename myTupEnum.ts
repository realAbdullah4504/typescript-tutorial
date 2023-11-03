let tUser: [number, string] = [1, "John"];
let rgb: [number, number, number] = [255, 255, 255];

//push and pull are allowed

type User = [number, string];
const user: User = [1, "John"];
user.push(123);

export {};
