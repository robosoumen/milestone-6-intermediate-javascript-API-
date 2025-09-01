const numbers = [2, 4, 6, 8, 10];
// const doubled = [];
// for(const num of numbers){
//     const total = num * 2
//     doubled.push(total)
// }
// const doubleIt = x => x*2;
// const doubled = numbers.map(doubleIt)
const doubled = numbers.map(x => x*2)
const fiveTimes = numbers.map(num => num * 5)
const squared = numbers.map(num => num* num)
console.log(doubled)
console.log(fiveTimes)
console.log(squared)

const friends = ['Soumen', 'zaved', 'Novel', 'kodvel']
const nameLength = friends.map(name => name.length)
const nameFirstLatter = friends.map(name => name[0].toUpperCase())
console.log(nameFirstLatter)
console.log(nameLength)
const result = numbers.map((num, index)=> {
    console.log(num*index)
    return index;
})
console.log(result)