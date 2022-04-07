/**
 * Team (Mansour, Vassiles, Ghassan).
 * Merge the branches when the STAGE is finished.
 
 Tasks and plan:
-----------------

 STAGE 1 (set up the project):
 
 Mansour:
 - create Pokemon class and add the Properties (name, health, magic, skills = [], totalmagicsused = 0 and counter = 0) to the constructor.
 - add learnAttackSkill, getMagics, attack and showStatus (empty methods) to the Pokemon class.

 Vassiles:
- create AttackSkill class and add the Properties (attack, damage and magic) to the constructor.

Ghassan:
- create instances and add the call stack.

***************************************************************************
 STAGE 2 (add the features)

  Mansour:
 - implement learnAttackSkill and getMagics methodes.

 Vassiles:
- implement attack methode.

Ghassan:
- implement showStatus methode.


 */


// Instances and call stack
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);

/* let fire = new AttackSkill("fire", 40, 100); */

pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);

/* pikachu.learnAttackSkill(fire); */

console.log(pikachu);

bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);

/* bulbasaur.learnAttackSkill(fire); */

pikachu.attack(0, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.attack(1, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(1, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.attack(1, bulbasaur);

// - create AttackSkill class and add the Properties (attack, damage and magic) to the constructor.

class AttackSkill extends Pokemon {
  constructor(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
  }
}
class Pokemon {
    constructor(name, health, magic) {
      this.name = name;
      this.health = health;
      this.magic = magic;
      this.skills = [];
      this.totalmagicsused = 0;
      this.counter = 0;
    }
  
    learnAttackSkill(newskill) {}
  
    showStatus() {
        console.log('showStatus')
    }
  
    getMagics() {}
  
    attack(index, opponent) {}
  }

