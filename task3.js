const add = (a,b,c)=> {
    return a+b+c;
}

const multiply = (a,b,c)=> {
    return a*b*c;
}

const square = (num)=> {
    return num**2;
}

const cube = (num)=> {
    return num**3
}

const power = (a,b)=> {
    return a**b;
}

const isEven = (a) => {
    if (a%2===0) {
        return true;
    } else {
        return false;
    }
}

const isDivisible = (a,b) => {
    if (a%b===0) {
        return true;
    } else {
        return false;
    }
}

const addAll = (array) => {
    let sum = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum = sum + element
    }
        return sum;
}

const sayHi = () => {
    console.log("hi");
}

const greet=(name)=> {
    console.log(`Hello ${name} how are you?`)
}