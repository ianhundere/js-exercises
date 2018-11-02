const day = parseInt(prompt('Day (0-6)'));
const rangeMax = 7;

if (day > rangeMax) {
    const day = parseInt(prompt("Please enter a number 0-6: "));
}

if (day > 5){
    console.log("Sleep in");
} else if (day <= 5){
    console.log("Work day");
}


