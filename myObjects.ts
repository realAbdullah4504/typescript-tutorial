let user = {
  name: "John",
  age: 25,
  isMarried: false,
};
const newUser = ({ name: string, age: number }) => {
  return {
    name: "John",
    age: 25,
    isMarried: false,
  };
};
let newUser1 = { name: "John", age: 25, isMarried: false };
newUser(newUser1);

type User = {
  name: string;
  age: number;
  isMarried: boolean;
};
const newUser2 = (user: User): User => {
  return {
    name: "John",
    age: 25,
    isMarried: false,
  };
};
newUser2({ name: "John", age: 25, isMarried: false });

//readonly combining and optional type

type User1 = {
  readonly _id: string;
  name: string;
  age: number;
  isMarried: boolean;
  creditCard?: number;
};
let user1: User1 = {
  _id: "12345",
  name: "John",
  age: 25,
  isMarried: false,
};
//   user1._id='dads'

//to concat different types
type creditCard = {
  cardNumber: string;
};
type creditDate = {
  cardDate: string;
};

type creditDetails = creditCard &
  creditDate & {
    cvv: number;
  };

export {};
