// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const result = this.attack(this.vikingArmy, this.saxonArmy); //chama a funcao attack,com vikings atacando

    this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0); //retorna nova array com saxons health > 0
    return result;
  }

  saxonAttack() {
    const result = this.attack(this.saxonArmy, this.vikingArmy); //chama a funcao attack,com saxons atacando

    this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0); //retorna nova array com vikings health > 0

    return result;
  }

  attack(attackers, defenders) {
    const randomIndexAttacker = Math.floor(Math.random() * attackers.length); //numero randomico
    const randomIndexDefender = Math.floor(Math.random() * defenders.length); //numero defensores

    const attacker = attackers[randomIndexAttacker]; //seleciona um atacante randomico
    const defender = defenders[randomIndexDefender]; //seleciona um defensor randomico
    const result = defender.receiveDamage(attacker.strength); //retira health do defensor c. o valor do strength do atacante

    return result;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
