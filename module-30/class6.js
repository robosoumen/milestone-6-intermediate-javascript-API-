// class ---> template
// 1-properties
// 2-method(a special type of function inside a class without the function keyword)


class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'bangladesh'
        // console.log('calling the constructor method',name)
    }
    goal(){
        console.log('score a goal')
    }
}
const player1 = new Player('tom brady', 89)
const player2 = new Player('o santo',90)

console.log(player1 instanceof Player)
console.log(player2)
// player1.goal()
// console.log(player1)