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

people.sort((a, b) => {                     // the sort() method is used in an annonymous function to sort the array, people, 
    return  a.length - b.length;           // based on the length of each item in the array in ascending order.
});

console.log(people);