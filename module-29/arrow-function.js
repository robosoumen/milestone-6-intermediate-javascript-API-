// function declaration
function add(num1,num2){
    return num1 + num2
}

// function expression
const addition = function(num1, num2){
    return num1 + num2
}

// arrow function
const add2 = (num1, num2) => num1 + num2
const result = add2(19, 77)
console.log(result)


const multiply = (a, b) => a* b
const mult = multiply(6,9)
console.log(mult)

// multiline arrow function
const doMath = (x, y) => {
    const makeDouble = x*2;
    const againDouble = y*2;
    const result = makeDouble + againDouble;
}
