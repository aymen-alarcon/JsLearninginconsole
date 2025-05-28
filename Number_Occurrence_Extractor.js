function extractNumbers() {
    let tab = [];
    
    for (let index = 0; index < 9; index++) {
        let input = Number(prompt('Enter a number:'));
        
        tab[index] = input;
    }

    let number = Number(prompt('Give me the number you are looking for'));
    
    let first = -1;
    let last = -1;
    for (let num1 = 0; num1 < tab.length; num1++) {
        if (tab[num1] === number) {
            if (first === -1) {
                first = num1;
            }
            last = num1;
        }
    }
    if (first !== -1) {
        console.log(`The number ${number} appears first at position number ${first + 1} and the last time at position number ${last + 1} in the table`);
    }
    
    let count = 0;
    for (let index = 0; index < tab.length; index++) {
        if (tab[index] === number) {
            count++;
        }
    }
    console.log(`The number ${number} appears ${count} time(s) in the array.`);
    
}
extractNumbers();
