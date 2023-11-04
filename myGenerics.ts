// const score:string[]=[]
// const score1:Array<number>=[]

function printArray<T>(items: T[]): void {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
printArray([1, 2, 3, 4]);

function print<Type>(num: Type): void {
  console.log(num);
}

print("1");

interface Bottle {
  name: string;
  price: number;
}
function printBottle<Bottle>(bottle: Bottle): void {
  console.log(bottle);
}
printBottle({ name: "bottle", price: 100 });

function printArray1<T>(items: T[]): T {
  return items[0];
}
const printArray2 = <T>(items: T[]): T => {
  return items[0];
};

//generic classes
class GenericClass<T> {
  constructor(public name: T) {}
  print(): void {
    console.log(this.name);
  }
}

const hello = new GenericClass("hello");
hello.print();

//generic interfaces
interface Database {
  connection: string;
  name: string;
  id: number;
}
const anotherFunction = <T, U extends Database>(items: T[], value: U): T => {
  return items[0];
};
anotherFunction([1, 2, 3], { connection: "", name: "", id: 0, age: 0 });
export {};
