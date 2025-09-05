function multiply(x, y){
    x = x + 5;
    y = y + 10
    const mult = x * y;
    return mult;
}
const result = multiply(3, 6);
console.log(result)

const manik = {name:'soumen',balance:20000}
const rotan = {name:'rotan',balance:40000}
console.log('before call',manik,rotan);

function totalMoney(person1, person2){
    person1.balance =0;
    person2.balance = person2.balance/2;
    const total = person1.balance + person2.balance;
    return total;
}

const balance = totalMoney(manik, rotan);
console.log('balance',balance)

console.log('after function call', manik, rotan)