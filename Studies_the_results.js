function classnote(){
    let nbr = Number(prompt('enter the number of the class members'));
    let note = [];
    
    for (let index = 0; index < nbr; index++) {
        note [index] = Number(prompt('enter the note of the student'));
    }

    for ( let element of note){
        console.log(element);
    }

    let somme = 0;

    for (let index = 0; index < note.length; index++) {
        somme += note[index];
    }
    let moyenne = somme / nbr;
    console.log(moyenne);

    let admis = 0;
    let nonadmis = 0;

    for (let index = 0; index < note.length; index++) {
        if (note[index] >= 10) {
            admis += 1;
        } else {
            nonadmis += 1;
        }
    }
    console.log(`the number of students who have passed is ${admis} and the number of students who have failed is ${nonadmis}`);

    let count = 0;
    for (let index = 0; index < note.length; index++) {
        if (note[index] > moyenne) {
            count += 1;
        }
    }
    console.log(`the number of students who have a note higher than the average is ${count}`);

}
classnote();