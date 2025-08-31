function add (num1,num2 = 0){
    const total = num1 + num2
    console.log(num1,num2,total)
}
add(20,10)
// add(20,10)
// add(20,10)

//some thumb rule for default value can be 
// add, subtract --> 0
// multiply --> 1
//string --> ' '
//object --> {}
//array--> []