const arrayNums = [ -1, 2, 6, -9, 4, -3 ];
let posNums = [];

arrayNums.forEach((arr) => {          // an anonymous function that takes an array and uses the forEach method to 
    if (arr >= 0) {                 // check each item/number to see if it is >= to 0. if the item/number is >= 0
    posNums.push(arr);              // then the item/number gets appended to the empty array, posNums, using the 
    }                               // push method.
});

console.log(posNums)