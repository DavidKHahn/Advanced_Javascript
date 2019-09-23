// ES6 Class
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

// Elf is a subclass of Character (superclass)
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon); // must call 'super' to use super class and its properties
        console.log(this) // 'this' refers to the super class: 'Character' and it's properties
        this.type = type
    }
}


class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'Strongest fort in the world made!'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby)
console.log(dolby.attack());

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek)
console.log(shrek.makeFort())
