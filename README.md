# Why Functional Programming?

__Definition__: Functional programming aims to bring the precision of mathematical functions (```y = f(x)```) into computer programs.

## Core Concepts of FP

1. Immutability
2. Separating functions and data
3. First-class/Higher-order Functions

### Immutability

FP ensures that a __variable is assigned once and maintains its value__. Until now, the traditional approach was to assign variables and change their values based on the needs of the program. Don't be confused with statically-typed and dynamically-typed programming languages since their only difference lies in the __data type__ and __not__ the value.

```
var x = 5
console.log('Do something...')
x = 15
```

### Separation of Data and Functions

While in OOP data and functions are coupled to a single instance, in FP a data may be a data structure that we have direct access to it. Usually in OOP, we access data through methods and instance variables. In FP, data is passed as arguments to fuctions, which are then used internally.

```
// OOP
function Numbers(...ints){
    this._numbers = ints
}
Numbers.prototype.average = function(){
    return this._numbers.reduce((a,v) => a + v,0)
}

// FP
const numbers = [1,2,3,4,5]
const findAverageNumber(...num){
    // calculate average
}

findAverageNumber(...numbers)
```

### Higher-Order Functions

Functions are treated like any other data type, meaning that they can be passed as arguments, assigned to variables and many others. Different design patterns have evolved around that concept.


## Vocabulary

__Pure Function__: functions that don't depend on, and **don't modify anything outside its scope**, and do always return the **same result for the same input argument**.