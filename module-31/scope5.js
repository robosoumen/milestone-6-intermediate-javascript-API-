// let name = "Soumen"; // global scope

// function greet() {
//   console.log(name); // এখানে নাম পাওয়া যাবে
// }

// greet();
// console.log(name); // এখানেও পাওয়া যাবে

// var a;        // declaration উপরে চলে গেছে
// console.log(a); // undefined
// a = 5;        // value পরে এসাইন হলো


// hoisting
doMath(80, 40)

function doMath(a, b){
    console.log(a+b)
    console.log(double(2))
    function double(x){
        return x*4
    }
}