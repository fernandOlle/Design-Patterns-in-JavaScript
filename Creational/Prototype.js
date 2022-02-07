class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  deepCopy() {
    return new Point(this.x, this.y);
  }
}

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    return new Line(this.start.deepCopy(), this.end.deepCopy());
  }

  toString() {
    console.log(
      `Start: ${this.start.x} & ${this.start.y} | ` +
        `End: ${this.end.x} & ${this.end.y} \n`
    );
  }
}

let originalLine = new Line(new Point(1, 2), new Point(3, 4));
let copiedLine = originalLine.deepCopy();
copiedLine.start.x = 10;

originalLine.toString();
copiedLine.toString();
