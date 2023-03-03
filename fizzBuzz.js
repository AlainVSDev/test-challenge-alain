// Write a function that takes in a number and returns one of the following:

/*  -If the number is divisible by 3, return 'Fizz'.
    -If the number is divisible by 5, return 'Buzz'.
    -If the number is divisible by 3 and 5, return 'FizzBuzz'
    -Else, return the number passed as an argument */


    const fB = (num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'FizzeBuzz';
        } if (num % 3 === 0) {
            return 'Fizze'; 
        } if (num % 5 === 0) {
           return 'Buzz';
        } else {
            return num;
        }
    };

    // console.log(fB(15));
    // console.log(fB(3));
    // console.log(fB(5));
    

    module.exports = fB;



      

