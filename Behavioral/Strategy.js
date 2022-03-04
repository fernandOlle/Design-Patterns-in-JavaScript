class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
    this.alive = this.health > 0;
    this.id = Creature.count++;
  }
}
Creature.count = 0;

class Game {
  constructor(damageStrategy) {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature) {
    this.damageStrategy.damage(creature);
    return creature.alive;
  }
}

class DamageStrategy {
  damage(creature) {
    if (creature.health <= 0) {
      creature.alive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy {
  damage(creature) {
    creature.health--;
    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy {
  damage(creature) {
    if (!GrowingDamageStrategy.impact[creature.id]) {
      creature.health--;
      GrowingDamageStrategy.impact[creature.id] = 1;
      super.damage(creature);

      return;
    }
    let dmg = ++GrowingDamageStrategy.impact[creature.id];
    creature.health -= dmg;

    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};

let cg = new Game(new GrowingDamageStrategy());
let c1 = new Creature(1, 3);
let c2 = new Creature(1, 3);

cg.springTrapOn(c1);
cg.springTrapOn(c2);
console.log('\nSpring trap on both creatures!! \n');

console.log('Creature 1 health :' + c1.health);
console.log('Creature 1 is ' + (c1.alive ? 'Alive' : 'Dead') + '\n');
console.log('Creature 2 health :' + c2.health);
console.log('Creature 2 is ' + (c2.alive ? 'Alive' : 'Dead') + '\n');

cg.springTrapOn(c2);
console.log('\nSpring trap on creature 2!! \n');

console.log('Creature 1 health :' + c1.health);
console.log('Creature 1 is ' + (c1.alive ? 'Alive' : 'Dead') + '\n');
console.log('Creature 2 health :' + c2.health);
console.log('Creature 2 is ' + (c2.alive ? 'Alive' : 'Dead') + '\n');
