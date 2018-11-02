function call3Times(fun) {                      // defined function that calls another function 3 times.
  fun();
  fun();
  fun();
}

function fun() {                                // defined the fun() function that just console logs `Hello World!` once.
    console.log(`Hello World!`);
}


call3Times(fun);                                // console logs the first function, call3Times, which runs the second function
                                                // which console logs the string `Hellow World!`.