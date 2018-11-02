const height = parseInt(prompt(`height? `));
const width = parseInt(prompt(`width? `));

console.log(`*`.repeat(width));
for (let star_col = 0; (star_col < height); star_col++) {
    console.log(`*`+` `.repeat(width-2)+`*`);
}
console.log(`*`.repeat(width));


