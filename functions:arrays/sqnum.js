const arrayNums = [-1, 2, 6, -9, 4, -3];

function sq(n) {                        // a function is defined that takes an argument, a number, and then multiplies  
    return n * n;                       // that number by itself creating a squared number.
};

let sqNums = arrayNums.map(sq);         // a new variable is defined using the map method to populate a new array based on
                                        // output of the sq(n) function.
console.log(sqNums);
