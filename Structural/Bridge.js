class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Triangle extends Shape {
  constructor(renderer, width, height) {
    super(renderer);
    this.width = width;
    this.height = height;
  }
}

class Square extends Shape {
  constructor(renderer, size) {
    super(renderer);
    this.size = size;
  }
}

class VectorRender {
  renderTriangle(triangle) {
    console.log(
      `Vector rendering  triangle of width ${triangle.width} ` +
        `and height ${triangle.height}`
    );
  }

  renderSquare(square) {
    console.log(`Vector rendering square of size ${square.size}`);
  }
}

class RasterRender {
  renderTriangle(triangle) {
    console.log(
      `Raster rendering  triangle of width ${triangle.width} ` +
        `and height ${triangle.height}`
    );
  }

  renderSquare(square) {
    console.log(`Raster rendering square of size ${square.size}`);
  }
}

const raster = new RasterRender();
const square = new Square(raster, 2);
raster.renderSquare(square);

const vector = new VectorRender();
const triangle = new Triangle(vector, 5, 3);
vector.renderTriangle(triangle);
