const students = [
{id:1, name:'soumen', marks:100},
    {id:2, name:'ganesh', marks:10},
    {id:3, name:'nilesh', marks:20},
   { id:4, name:'mihir', marks:30},
    {id:5, name:'kousik', marks:400}
]
const names = students.map(student => student.name)
const goodStudents = students.filter(student => student.marks > 80)
const goodStudent = students.find(student => student.marks > 80)
console.log(goodStudent)
console.log(goodStudents)
console.log(names)