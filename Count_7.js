//The function countNumbersUntilZero() asks the user to enter numbers until they enter 0. It
function countsevens() {
    let totalnumber = 0;
    let count = 0;
    let numbers = Number(prompt("Enter a number to count"));
    let firstposition = "";
    let lastposition = "";
    
    while (totalnumber <= 11) {
        let number = Number(prompt("Enter a number"));
            if (number === numbers) {
                count++;
                if (firstposition === "") {
                    firstposition = totalnumber + 1;
                }
                lastposition = totalnumber + 1;
            }
            totalnumber++;
        }
        
        console.log(`The number ${numbers} has been inputted ${count} times.`);
        console.log(`the first ${numbers} was intered at  ${firstposition}`);
        console.log(`the first ${numbers} was intered at  ${lastposition}`);

}

countsevens();
