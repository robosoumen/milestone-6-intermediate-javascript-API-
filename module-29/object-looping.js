const numbers = [1, 20, 30, 40, 8, 88, 79];
for(const num of numbers){
    console.log(num)
}

const employee = {
    name:'soumen bera',
    designation:'QA',
    salary:200,
    experience:1,
    age:24
}
for(const key in employee){
    const value = employee[key];
    console.log(key, value)
}
const keys = Object.keys(employee);
console.log(keys)
for(const key of keys){
    const value = employee[key]
}
// console.log(value)