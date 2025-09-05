function counter(){
    let count = 0;
    function innerFunction(){
        console.log('inside the inner function,some one called me')
    }
    return innerFunction;
}
const outPut = counter();
console.log(outPut())