const cities = [                                // defined variable for array of cities/temps.
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

let coolCities = [];                            // defined variable for empty array where cities with temps of less than 70 go.

function whatsCool(arr) {                       // a function defined that takes an array and uses the forEach method to 
    cities.forEach((city) => {                  // check each city if their temperature is less than 70. if the temp is less
        if (city['temperature'] < 70) {         // than 70, the city and temp objects get put into a new list using the push
            coolCities.push(city);              // method.
        }
    }) 

    console.log(coolCities)                     // cities with a temp of < 70 are printed out.
}

whatsCool(cities);