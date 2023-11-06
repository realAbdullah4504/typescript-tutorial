interface Square {
  kind: "square";
  size: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Circle | Rectangle;

function area(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
}
console.log(area({ kind: "square", size: 10 }));

function area1(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "rectangle":
      return shape.width * shape.height;
    default:
      const _exhaustiveCheck: never = shape;  //all the conditions should be satisfied for that to check the error
      return _exhaustiveCheck;
  }
}
console.log(area1({ kind: "square", size: 10 }));
