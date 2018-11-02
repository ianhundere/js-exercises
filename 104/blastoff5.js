let start = parseInt(prompt("enter a number: "));
const delayMe = 1000;

while (start >= 20){
    (start = parseInt(prompt("please enter a number below 20: ")));
    }

let counter = setInterval(function () {
    console.log(start--);
    if (start === 0) {
        clearInterval(counter);
        console.log("we're done!");
    }
}, 1000);

