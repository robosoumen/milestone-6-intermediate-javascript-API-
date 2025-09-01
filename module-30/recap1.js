// var let const difference
let lta = 8;
lta = 2;
console.log(lta)

// default function parameter
function add(num1, num2 = 0){

}
const student = {name:'soumen', roll: 22, marks: 50}
const friends = ['abul','babul','kabul']

// template string
// const dynamicText = `My tax: ${tax} and marks ${student.marks*1.2} has friends: ${friends[1]}`

// arrow function
const add2 = (num1, num2 = 0) => num1 + num2;
const tenTimes = (x) => x*10;

// spread operator
const newFriends = [...friends, 'abul','dabul']

// destructuring
const { marks:totalMarks, age = 0} = student
console.log(totalMarks, age)

// array destructuring
const [firstFriend] = friends;