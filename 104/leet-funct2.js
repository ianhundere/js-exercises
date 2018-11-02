const textToTranslate = `you wish you were batman`;

// const textToTranslate = text.toUpperCase();
let translation = ``;

// a function that accepts a letter as an argument.
// it will return either the translation
// or the original letter.

// equivalent python:
// def translate(letter):
function translate(letter) {
    //  letter = letter.toUpperCase();
    const upperLetter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': `4`,
        'E': `3`,
        'G': `6`,
        'I': `1`,
        'O': `0`,
        'S': `5`,
        'T': `7`,
    };
    const replacement = lettersToNumbers[upperLetter];
    // if (replacement) {
    //     return replacement;
    // } else {
    //     return letter;
    // }
    // return replacment if it's truthy
    // else return letter
    return replacement || letter;
    // a.k.a. "short circuit evaluation"
}

function translateSentence(sentence) {
    let translation = ``;

    for (let character of sentence) {
        translation = translation + translate(character);
    }

    return translation;
}

console.log(translateSentence(textToTranslate));

// console.log(translation);