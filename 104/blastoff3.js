let start = parseInt(prompt("enter a number: "));
const end = 0;

while (start > end){
    (start -= 1);
    console.log(start);
    if (start === 0){
        console.log("we're done!");
    }
}
    
// for (const end = 0; end < start; start -= 1) {
//     if (start === 0) {
//         console.log("we're done!");
//     }
// }