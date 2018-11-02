const height = parseInt(prompt(`height? `));

for (let x = 1; x < (height + 1); x++){
    const whitespace = height - x;
    console.log((` `.repeat(whitespace)) + `*`.repeat(x + (x - 1)) );
}

