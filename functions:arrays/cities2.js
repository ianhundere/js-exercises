const cities = [                                    // defined variable for array of cities/temps.
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

let namesOfCities = [];                            // defined variable for empty array where city names will go.

function arrOfCities(arr) {                       // a function created where the forEach method is used to then look at
    cities.forEach((city) => {                   // each object and use the push method to append the name of each city
        namesOfCities.push(city['name']);       // to the array, namesOfCities.
    })

    console.log(namesOfCities)
}

arrOfCities(cities);