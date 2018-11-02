const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];
function goodNames(arr) {                       // function created that takes in an array. the function then uses an 
    people.forEach((names) => {                 // annonymous function that uses the forEach method to console log
        console.log(`Good Job, ${(names)}!`);   // each of the items/names in the list and then uses string interpolation
    })                                          // to include the items/names in a string.
}
// function goodNames(arr) {
//     goodArr = [];
//     people.forEach((names) => {
//         console.log(`Good Job, ${goodArr.push(names)}!`);
//     })
// }
goodNames(people);
