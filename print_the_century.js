//Create a function that takes in a year and returns the correct century.

function century(num) {
    let numStr = num.toString();
    if (numStr.length === 3){
        let firstdigit = numStr[0];
        let cent1 = parseInt(firstdigit) + 1;
        console.log(`${cent1}th century`);
    } else {
        let secdigit = numStr.slice(0, 2);
        let cent2 = parseInt(secdigit) + 1;
        console.log(`${cent2}th century`);
    }
};

century(999) // "10th century"
century(1001) // "11th century"
century(2005) // "21st century"
