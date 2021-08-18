/*One of the fun parts of JavaScript is that you can extend all the standard types 
by extending their prototype. In this challenge, you need to give JavaScript 
Strings a swapCase() function, which will return a new string with all upper case
 characters swapped for lower case characters, and vice versa. 
Any non-alphabetic characters should be kept as they are.*/

function swapCase(str) {
    let upArray = ["A", "B", "C", "D", "E", "F", "G", "E", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let swapStr = [];
    for (i = 0; i < str.length; i++) {
        if (upArray.includes(str[i])) {
            swapStr.push(str[i].toLowerCase());
        } else {
            swapStr.push(str[i].toUpperCase());
        }
    }
    return swapStr.join("");
}



console.log(swapCase("Hello")); // "hELLO"
console.log(swapCase("aBcD")); // "aBcD"
