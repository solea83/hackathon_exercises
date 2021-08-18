/*Write a function that converts an object into 
an array of keys and values using a simple for loop.*/

function objectToArray(obj) {
    let resultArray = [];
    for (const key in obj) {
        let newArr = [key, obj[key]];
        resultArray.push(newArr);
    }
    return resultArray;
};
console.log(objectToArray({likes: 2, dislikes: 3, followers: 10})); // [["likes", 2], ["dislikes", 3], ["followers", 10]]
