const numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
for(const num of numbers){
    sum = sum + num
}

const total = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(total)
console.log(sum)