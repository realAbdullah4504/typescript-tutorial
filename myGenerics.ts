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

interface Bottle{
  name:string;
  price:number;
}
function printBottle<Bottle>(bottle:Bottle):void{
  console.log(bottle)
}
printBottle({name:"bottle",price:100})

export {};
