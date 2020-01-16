const divide = (x,y) => x / y

const isDivisibleByZero = fn => (x,y) => {
    if(y === 0) {
        throw new Error('no division by zero')
    }
    return fn(x,y)
}

console.log(isDivisibleByZero(divide)(1,1))