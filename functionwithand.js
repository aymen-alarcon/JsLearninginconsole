let num1 = 7;
let num2 = 10;
let num3 = 9;

function checkorder(num1, num2, num3) {
    if (num1 < num2 && num2 < num3) {
        console.log("les nombres sont en order croisent");
    } else if (num1 > num2 && num2 > num3) {
        console.log("les nombres sont en order décroisent");
    } else if (num1 == num2 && num2 == num3) {
        console.log("les nombres sont egaux");
    } else{
        console.log("les nombres sont différant");
    }
}

checkorder(num1, num2, num3); 
