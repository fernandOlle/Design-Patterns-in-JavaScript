class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? 'flying' : 'too old';
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? 'crawling' : 'too young';
  }
}

class Dragon {
  constructor(age = 0) {
    this.age = age;
    this.lizard = new Lizard(age);
    this.bird = new Bird(age);
  }

  crawl() {
    console.log(`Crawl: ${this.lizard.crawl()}`);
    return this.lizard.crawl();
  }

  fly() {
    console.log(`Fly: ${this.bird.fly()}`);
    return this.bird.fly();
  }
}

const youngDragon = new Dragon();
youngDragon.crawl();
youngDragon.fly();
