let score: number | string;
score = 44;
score = "44";

type User = {
  name: string;
  age: number;
};
type Admin = {
  username: string;
  id: number;
};

let user: User | Admin = { name: "John", age: 25 };
user = { username: "John", id: 25 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", "2", 3];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";


export {};
