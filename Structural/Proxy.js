class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() {
    return 'drinking';
  }
  drive() {
    return 'driving';
  }
  drinkAndDrive() {
    return 'driving while drunk';
  }
}

class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }
  get age() {
    return this.person.age;
  }

  set age(value) {
    this.person.age = value;
  }

  drink() {
    return this.age >= 18 ? this.person.drink() : 'too young';
  }
  drive() {
    return this.age >= 16 ? this.person.drive() : 'too young';
  }
  drinkAndDrive() {
    return 'dead';
  }
}

let p = new Person(10);
let rp = new ResponsiblePerson(p);

console.log(rp.drive());
console.log(rp.drink());
console.log(rp.drinkAndDrive());

rp.age = 20;

console.log(rp.drive());
console.log(rp.drink());
console.log(rp.drinkAndDrive());
