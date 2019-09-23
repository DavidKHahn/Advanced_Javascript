// Immutability
const obj = {name: 'David'}

function clone(obj) {
    return {...obj}; // this is pure
}

function updateName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Nana'
    return obj2
}

// original data and function stays same until ran through updateName
const updatedObj = updateName(obj)
console.log(obj, updatedObj)