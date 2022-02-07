class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
}

function area(rectangle) {
  return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.square = square;
  }

  get width() {
    return this.square.side;
  }

  get height() {
    return this.square.side;
  }
}

const square = new Square(5, 5);
const adaptedSquare = new SquareToRectangleAdapter(square);
console.log(area(adaptedSquare));
