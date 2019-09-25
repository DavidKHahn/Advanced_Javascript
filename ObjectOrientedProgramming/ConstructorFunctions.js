// Object Oriented Programming Review
// Constructor Functions
function Elf(name, weapon) {
// 'this' points to new objects created when constructor functions are called with 'new'
    this.name = name;
    this.weapon = weapon;
}
// creates attack function onto 'Elf' using prototype (constructor)
Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}
// 'bind' this is necessary since the 'this' binds to the window object (prototype)
// Elf.prototype.build = function(){
//     function building() {
//         return this.name + ' builds a house';
//     }
//     return building.bind(this)
// }
// case #2
// Elf.prototype.build = function(){
//     // lexically create 'this' inside the function to create reference
//     let self = this;
//     function building() {
//         return self.name + ' builds a house';
//     }
//     return building()
// }

const peter = new Elf('Peter', 'stones')
// console.log(peter.build()())
// console.log(peter.build())
console.log(peter.attack())
const sam = new Elf('Sam', 'FIREEE')
console.log(sam.name)
// console.log(sam.attack())

// capital letters indicate use of 'New' keyword
const Elf1 = new Function('name', 'weapon',
        `this.name = name;
        this.weapon = weapon;` // template strings
)

const david = new Elf1('David', 'FIREEEE!')
console.log(david)