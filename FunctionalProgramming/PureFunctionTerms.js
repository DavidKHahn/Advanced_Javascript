// Idempotence: being able to call the function and always receiving the same results
// (i.e.: deleting a user from database, API network calls for data, returning number 5, code being predictable)
function notGood() {
    return Math.random()
}

console.log(notGood())

// Imperative vs Declarative
// Imperative: tells machine what to do and how to do it (computer is better at this)
// Declarative: tells machine what to do and what should happen (humans are better at this)

// imperative
for (let i = 0; i<1000; i++){
    console.log(i)
}

// declarative
[1,2,3].forEach(item => console.log(item))

// Immutability
const obj = {name: 'David'}
function clone(obj) {
    return {...obj}; // this is pure
}

obj.name = 'Nana'