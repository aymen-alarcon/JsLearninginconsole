function countNumbersUntilZero() {
    let countPositive = 0; 
    let countNegative = 0; 
    let sumPositive = 0;
    let sumNegative = 0; 
    let count = 0;
    let result = "";

    while (true) {
        count = Number(prompt("Enter a number : "));
        if (count === 0) {
            break;
        }

        if (count > 0) {
            countPositive++;
            sumPositive += count; 
        } else {
            countNegative++;
            sumNegative += count; 
        }

    }
    result = `You have entered ${countPositive} positive numbers (sum of positive numbers is ${sumPositive}) and ${countNegative} negative numbers (sum of negative numbers is ${sumNegative}).`;
    console.log(result);

}

countNumbersUntilZero();
