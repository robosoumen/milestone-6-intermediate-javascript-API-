const employee = {
    name:'soumen bera',
    designation:'QA',
    salary:200,
    experience:1,
    age:24
}
Object.freeze(employee)
delete employee.experience
delete employee.age
employee.salary = employee.salary + 20000
employee.location = 'ghatal'
console.log(employee)