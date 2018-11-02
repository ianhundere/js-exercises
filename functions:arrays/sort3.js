var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

products.sort((a, b) => {                   // the sort() method is used in an annonymous function   
    return a.price - b.price;              // to sort an array, products, by the key(price) of the object in ascending order.
});

console.log(products);