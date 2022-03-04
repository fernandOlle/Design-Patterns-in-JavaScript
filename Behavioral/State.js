class CombinationLock {
  constructor(combination) {
    this.reset(combination);
  }

  reset(combination) {
    this._combination = combination;
    this.status = 'LOCKED';
    this.digitsIdx = 0;
    this.failed = false;
  }

  get combination() {
    return this._combination;
  }

  enterDigit(digit) {
    if (this.status === 'LOCKED') this.status = '';

    this.status += digit.toString();

    if (this.combination[this.digitsIdx] !== digit) this.failed = true;

    this.digitsIdx++;

    if (this.digitsIdx === this.combination.length)
      this.status = this.failed ? 'ERROR' : 'OPEN';

    return digit;
  }
}

let cl = new CombinationLock([1, 2, 3]);

console.log(cl.status);
console.log('Entered digit ' + cl.enterDigit(1));
console.log(cl.status);
console.log('Entered digit ' + cl.enterDigit(2));
console.log(cl.status);
console.log('Entered digit ' + cl.enterDigit(3));
console.log(cl.status);

cl.reset(cl.combination);
console.log('\n' + cl.status);
console.log('Entered digit ' + cl.enterDigit(1));
console.log(cl.status);
console.log('Entered digit ' + cl.enterDigit(2));
console.log(cl.status);
console.log('Entered digit ' + cl.enterDigit(4));
console.log(cl.status);
