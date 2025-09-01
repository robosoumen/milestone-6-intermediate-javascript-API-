const numbers = [10, 20, 30, 3, 5, 8, 88, 99, 66];
const greaterThan10 = numbers.filter(x => x > 0)
const evenNumbers = numbers.filter(x => x%2 ===0)
console.log(evenNumbers)
console.log(greaterThan10)