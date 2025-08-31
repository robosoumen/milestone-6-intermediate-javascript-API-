const numbers = [10, 20, 30, 40, 50];
console.log(numbers)
console.log(...numbers)

// const max = Math.max(111, 2, 88, 67, 9000)
const max = Math.max(...numbers)
console.log(max)

const first = [10, 20, 30, 40, 90]
const second = [...first]
const third = [...first,0,9,9999,88888]
second.push(99)
console.log(first)
console.log(second)
console.log(third)
// const first = [10, 20, 30, 40, 90]
// const second = first
// second.push(99)
// console.log(first)
// console.log(second)

const person = {name:'soumen',age:26}
const employee = {designation:'developer', ...person}
console.log(employee)