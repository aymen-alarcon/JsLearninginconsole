function croissantdecroissant() {
    let tab = [1, 1, 2, 1, 1];
    let isIncreasing = true; 
    let isDecreasing = true; 
    let areAllEqual = true;

    for (let index = 0; index < tab.length - 1; index++) {
        if (tab[index] < tab[index + 1]) {
            isDecreasing = false;
            areAllEqual = false;
        } else if (tab[index] > tab[index + 1]) {
            isIncreasing = false;
            areAllEqual = false; 
        } else {
            isIncreasing = false; 
            isDecreasing = false;
        }
    }

    if (areAllEqual) {
        console.log("Tous les éléments du tableau sont égaux.");
    } else if (isIncreasing) {
        console.log("Le tableau est strictement croissant.");
    } else if (isDecreasing) {
        console.log("Le tableau est strictement décroissant.");
    } else {
        console.log("Les éléments du tableau sont différents.");
    }
}

croissantdecroissant();