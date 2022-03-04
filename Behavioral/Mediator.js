/* I've particularly like this one <3 */

class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach((e, k) => {
      e(sender, args);
    });
  }
}

class Broker {
  constructor() {
    this.event = new Event();
  }

  broadcast(sender, n) {
    this.event.fire(sender, n);
  }
}

class Participant {
  constructor(broker) {
    this.broker = broker;
    this.value = 0;
    broker.event.subscribe(this.alert.bind(this));
  }

  alert(sender, n) {
    if (sender !== this) this.value += n;
  }

  say(n) {
    this.broker.broadcast(this, n);
  }
}

let broker = new Broker();
let p1 = new Participant(broker);
let p2 = new Participant(broker);

console.log(p1.value);
console.log(p2.value);

p1.say(1);

console.log('\n' + p1.value);
console.log(p2.value);

p2.say(2);

console.log('\n' + p1.value);
console.log(p2.value);
