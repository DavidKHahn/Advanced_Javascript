// const fiona = new Elf('Fiona', 'ninja stars');

// const ogre = {...fiona} // spread operator copies 'fiona'
// console.log(ogre) // ogre.__proto__ returns '{}' while fiona.__proto__ returns 'Elf {}'
class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}
// Character represents baseclass or superclass while Elf subclass using extends to grab properties
class Elf extends Character {
    constructor(name, weapon, type){
// super calls Character (superclass)
    super(name, weapon);
        this.type = type
// console.log(this): Elf { name: 'Fiona', weapon: 'ninja stars', type: 'princess' }
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
// console.log(this): Ogre { name: 'Shrek', weapon: 'club', color: 'green' }
    }
    makeFort() {
        return 'strongest fort in the world made';
    }
}

const fiona = new Elf('Fiona', 'ninja stars', 'princess')
console.log(fiona.attack())

const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makeFort())
