const total = parseFloat(prompt(`Total bill amount? `));
const good = total * .20;
const fair = total * .15;
const bad = total * .10;


const service = prompt(`Level of service? `);

const split = parseFloat(prompt(`Split how many ways? `));

if (service === `good`) {
    console.log(`Tip amount: $${good.toFixed(2)}`);
    console.log(`Total amount: $${(total + good).toFixed(2)}`);
    console.log(`Amount per person: $${(total / split).toFixed(2)} `);
}
else if (service === `fair`) {
    console.log(`Tip amount: $${fair.toFixed(2)}`);
    console.log(`Total amount: $${(total + fair).toFixed(2)}`);
    console.log(`Amount per person: $${(total / split).toFixed(2)} `);
}
else if (service === `bad`) {
    console.log(`Tip amount: $${bad.toFixed(2)}`);
    console.log(`Total amount: $${(total + bad).toFixed(2)}`);
    console.log(`Amount per person: $${(total / split).toFixed(2)} `);
}

