function add(a,b,c) {
    return a+b+c;
}

function multiply(a,b,c) {
    return a*b*c;
}

function square(num) {
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}
 
function power(a,b) {
    return a**b;
}

function isEven(a) {
    if (a%2===0) {
        return true;
    } else {
        return false;
    }
}

function isDivisible(a,b) {
    if (a%b===0) {
        return true;
    } else {
        return false;
    }
}

let array = [1,2,3,4]

function addAll(array) {
    let sum = 0
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element
}
    return sum;
}

function sayHi() {
    console.log("hi");
}

function greet(name) {
    console.log(`Hello ${name} how are you?`)
    console.log("Hello "+name+ " how are you?")
}