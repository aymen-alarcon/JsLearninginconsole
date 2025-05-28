function factorielIteratif(a) {
    if (a < 0) {
        console.log("Le factoriel n'est pas défini pour les nombres négatifs.");
    }

    let resultat = 1;
    
    for (let i = 2; i <= a; i++) {
        resultat *= i;
    }
    return resultat;
}

console.log(factorielIteratif(5));
