const arrayNums = [-1, 2, 6, -9, 4, -3];
let evenNums = [];

arrayNums.forEach((arr) => {      // an annonymous function is created with the forEach method that checks if  
    if (arr % 2 === 0) {         // each number in the array, arrayNums, is divisble by 2. if the number is divisible by 2
        evenNums.push(arr);     // the number is appended to the new array, evenNums, using the push method.
    }
});

console.log(evenNums)