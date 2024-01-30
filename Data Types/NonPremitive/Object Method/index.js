let emp = {
    eName:"Sudesh",
    eid:222,
    ePlace:"Mysore"
}

Object.seal(emp)
// Object.freeze(emp)
emp.eName = "SudeshGowda"
emp.epin = 560001

let a = Object.isFrozen(emp)
console.log(a);

let b = Object.isSealed(emp)
console.log(b);


console.log(emp);
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));