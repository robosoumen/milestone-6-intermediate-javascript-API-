const Vehicle {
    constructor(type,brand,price){
    this.type = type
    this.brand = brand
    this.price = price
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}