class Token {
  constructor(value = 0) {
    this.value = value;
  }
}

class Memento {
  constructor() {
    this.tokens = [];
  }
}

class TokenMachine {
  constructor() {
    this.tokens = [];
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    const newToken = new Token(token.value);
    this.tokens.push(newToken);
    let m = new Memento();
    m.tokens = [...this.tokens];
    return m;
  }

  revert(m) {
    this.tokens = [...m.tokens];
  }
}

tm = new TokenMachine();
tm.addTokenValue(1);
m = tm.addTokenValue(2);
tm.addTokenValue(3);
tm.revert(m);
console.log(tm.tokens.length);
console.log(tm.tokens[0].value);
console.log(tm.tokens[1].value);

tm = new TokenMachine();
token = new Token(111);
tm.addToken(token);
m = tm.addTokenValue(222);
token.value = 333;
tm.revert(m);

console.log(tm.tokens.length);
console.log(tm.tokens[0].value);
