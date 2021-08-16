 //Write a function that returns the same sentence minus two letters until only the first letter is left. 

 const yodel = 'Yodelayheeeeehooooo';

 const checkEcho = letters => {
     if (letters.length === 1) {
         console.log(letters);
     } else if (letters.length === 2) {
         console.log(letters);
         console.log(letters.slice(0, -1));
     } else {
         console.log(letters);
         checkEcho(letters.slice(0, -2));
     }
 };
 
 console.log(checkEcho(yodel));