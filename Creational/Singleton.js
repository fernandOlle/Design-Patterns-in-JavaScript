class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }

  static get factory() {
    return new SingletonFactory();
  }
}

class SingletonFactory {
  generator() {
    return new Singleton();
  }
}

class SingletonTester {
  static isSingleton(generator) {
    const obj1 = generator();
    const obj2 = generator();
    console.log(`Returning ${obj1 === obj2}`);
    return obj1 === obj2;
  }
}
const singleton = SingletonTester.isSingleton(Singleton.factory.generator);
