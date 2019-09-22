// ES6 Class
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

const david = new Elf('David', 'BOMBS')
console.log(david.attack())
console.log(david instanceof Elf)

// SIDE NOTE: with Object.create() you are able to create Classes without use of 'this' but Class is more often used