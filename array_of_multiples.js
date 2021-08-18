//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

const arrayOfMultiples = (num, length) => {
    const arr = [];
    for(let i = 1; i < length; i++ ){
        let multiply = num*i;
        arr.push(multiply);
    }
    return arr;
}

console.log(arrayOfMultiples(7, 5));
