function strMultiply(str, times) {              // a function is defined that takes two arguments, a string and a number.
    let multStr = [];                           // an empty array is created to take in the new string.
    for (var i = 0; i < times; i++) {           // a loop that iterates from 0 to the number of times the string will be
                                                // multiplied.
        multStr.push(str);                      // once the string is iterated through, the multiples are appended to a new
    }                                           // to a new array, multStr, using the push method.
    return multStr.toString().split(",").join(""); // the array, multiStr, is then converted to a string, split by the ','
}                                               // using the split method, and then joined together using the join method.

console.log(strMultiply('hey', 10));