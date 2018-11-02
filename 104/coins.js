// console.log(`is this thing on?`);
// need variables for
// - the user's answer
let whatUserSaid = `yes`;
// - how many coins that have
let numberOfCoins = 0;

// we need a loop
// it needs to run at least once

while (whatUserSaid === `yes`) {

    whatUserSaid = prompt(`another coin?`);
    // - if so, increment the count
    if (whatUserSaid == `yes`) {

        numberOfCoins++;
    }
    
    // - print the number of coins
    console.log(`You have ${numberOfCoins} coins`);
}

// after the loop (meaning, they said that they
// didn't wamt anymore coiins)
console.log('Tootles!');