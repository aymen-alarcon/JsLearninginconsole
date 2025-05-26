function MultiplicationTable() {
    const number = prompt("Please enter a number:");

    let i = 1;
    let result = "";
    do {
        result = `${number} x ${i} = ${number * i}`;
        i++;
        console.log(result);
    }

    while (i <= 10);
}

MultiplicationTable();
