const printElement = document.querySelector("[print]");

for (let i = 1; i < 101; i++){
    const para = document.createElement("p");
    printElement.appendChild(para);
    if ((i % 3 === 0) && (i % 5 === 0))
    {
        para.textContent += "FizzBuzz";
    }
    else if (i % 3 === 0) {
        para.textContent += "Fizz";
    }
    else if (i % 5 === 0) {
        para.textContent += "Buzz";
    }
    else {
        para.textContent += i;
    }
}
