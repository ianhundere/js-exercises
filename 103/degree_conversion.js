const celc = parseInt(prompt('Temp in C?: '));

// while celc not in answer:
//     celc = int(input("Please enter a number for the temp in C: "))

const fah = (celc * 1.8) + 32;
console.log(`${fah.toFixed(2)}F`)