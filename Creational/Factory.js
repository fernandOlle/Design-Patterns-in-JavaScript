class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  createPerson(name) {
    return new Person(PersonFactory.id++, name);
  }
}
PersonFactory.id = 0;

let personFactory = new PersonFactory();

let persons = [{}];
persons[0] = personFactory.createPerson('Fernando');
persons[1] = personFactory.createPerson('Claudia');

persons.map((person) => {
  console.log(`${person.id}: ${person.name}`);
  console.log(person instanceof Person);
});
