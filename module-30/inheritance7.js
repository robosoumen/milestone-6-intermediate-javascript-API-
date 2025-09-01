class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat (){
    console.log(`${this.name} is eating`);
}
}

class Dog extends Animal {
    constructor(name, breed, age){
        // this.name = name;
        // this.age = age;
        super(name,age)
        this.breed = breed;
    }


bark (){
    console.log(`${this.name} is barking`)
}
}
class Cat extends Animal {
    constructor(name, color, age){
        // this.name = name;
        // this.age = age;
        super(name, age)
        this.color = color;
    }

// eat(){
//     console.log(`${this.name} is eating`);
// }
meow(){
    console.log(`${this.name} is meowing`)
}
}
class Bird extends Animal {
    constructor(name, species, age){
        // this.name = name;
        // this.age = age;
        super(name, age)
        this.species = species;
    }

// eat(){
//     console.log(`${this.name} is eating`);
// }
fly(){
    console.log(`${this.name} is flying`)
}
}

const dog1 = new Dog('coffee', 'deshi', 2)
dog1.eat()
console.log(dog1)

const cat1 = new Cat('sp','white',6)
cat1.eat()
console.log(cat1)

const bird1 = new Bird('sss', 'nnn', 9)
bird1.eat()
console.log(bird1)