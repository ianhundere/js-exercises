function callNTimes(times, fun){            // a function is defined that takes two arguments, a number and a function.
    for (let i = 0; i < times; i++) {       // a for loop is used to iterate through the number given, times, and then 
        fun();                              // calls that function that many times.
    }
}

function fun() {                            // the function that is called n times by the above function, callNTimes.
    console.log(`Hello World!\n`);
}

callNTimes(10, fun);