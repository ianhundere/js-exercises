let start = parseInt(prompt("enter a number: "));
while (start >= 20) {
    start = parseInt(prompt("please enter a number below 20: "));
}
const end = 0;

while (start > end) {
    (start -= 1);
    console.log(start);
    if (start == 0){
        console.log("we're done!");
    }
}

// const start = parseInt(prompt(`enter a number: `));

// for (localCopyOfStart = start; localCopyOfStart >= 0; localCopyOfStart--) {
//     console.log(localCopyOfStart);
//     if (localCopyOfStart === 0) {
//         console.log(`We're done!`, localCopyOfStart);
//     }
// }