// function spinWords(string) {
//     for (var word = 0 in string) {
//         if (word.length >= 5) {
//             word.reverse += string;
//         }
//         else 
//             word += string;

//     }
//     console.log(spinWords);
// }

// console.log(spinWords("today is fun!"));


// function spinWords(string) {

//     for (let word = 0; word <= string.length; word++) {
//         if (word.length >= 5) {
//             return word.reverse() += string;
//         }
//         else {
//             return word += string;
//         }
//     }
//     console.log(string);
// }

// console.log(spinWords("it's all good."));

// function spinWords(string) {
//     let dicedWords = string.split(" ");
//     let reversedWords = [];
    
//     for (let word in dicedWords) {
//         if (word >= (word.length >= 5)) {
//         return word.reverse();
//     }
//     else {
//         return reversedWords.word;
//     }
//     }
//     console.log(reversedWords.toString);
// }

function spinWords(string) {
    let dicedWords = string.split(" ");
    let newArr = [];

    for (let word of dicedWords) {
       if (word.length >= 5) {
           newArr.push(word.split('').reverse().join(''));
       }
        else {
           newArr.push(word);
        }
       }
    return newArr.join(' ');
    }
    

console.log(spinWords("it's all good."));

