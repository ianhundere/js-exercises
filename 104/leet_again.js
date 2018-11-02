const text = `you wish you were batman`;

// "object" in javascript
// is basically a "dictionary" in python.



const lettersToNumbers = {
    'A': `4`,
    'E': `3`,
    'G': `6`,
    'I': `1`,
    'O': `0`,
    'S': `5`,
    'T': `7`,
};

const textToTranslate = text.toUpperCase();
let translation = ``;

// let's loop through the string to translate
for (let letter of textToTranslate) {
    // if the letter is a key in our "dictionary"
    const replacement = lettersToNumbers[letter];

    // and its value is not "falsey": false, null, undefined, 0, '', NaN
    if(replacement) {
        console.log(`${letter} is ${replacement}`);
        translaton = translation + replacement;
    } else {
        console.log(`${letter} stays the same`);
        translaton = translation + letter;
    }
    // use the translation 
    // otherwise, just use the original letter.

}

console.log(translation)