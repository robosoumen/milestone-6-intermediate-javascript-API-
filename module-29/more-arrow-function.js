// const getTax = (amount, taxRate) => amount*taxRate/100;
// console.log(getTax(100, 10))

// multiline arrow function
const doMath = (x, y) => {
    const makeDouble = x*2;
    const againDouble = y*2;
    const result = makeDouble + againDouble;
}


// single parameter arrow function
const square = (x) =>  x*x
const getHalf = (p, q) => p + q
console.log(square(7)) 

// other type
const variable = num => num[3]
console.log(variable([10, 20, 30, 40]))

// logit
const logIts = () => console.log(78)
console.log(logIts())


// anonymous function
document.getElementById('').addEventListener('click',() => {

} )
document.getElementById('').addEventListener('click', event => {

} )