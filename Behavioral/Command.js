let Action = Object.freeze({
  deposit: 0,
  withdraw: 1,
});

class Command {
  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.success = false;
  }
}

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    switch (cmd.action) {
      case Action.deposit:
        this.balance += cmd.amount;
        cmd.success = true;
        break;
      case Action.withdraw:
        cmd.success = this.balance >= cmd.amount;
        if (cmd.success) this.balance -= cmd.amount;
        break;
    }
  }
}

let a = new Account();

let command = new Command(Action.deposit, 100);
a.process(command);
console.log(a.balance);

command = new Command(Action.withdraw, 100);
a.process(command);
console.log(a.balance);

command = new Command(Action.withdraw, 100);
a.process(command);
console.log(a.balance);
