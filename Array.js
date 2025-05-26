//The function countsevens() asks the user to enter a number to count. It then asks th

let tableetd = ['Aymen','Ismail','Med'];
console.log(tableetd[2]);
console.log(`la taille de tableau est ${tableetd.length}`);

tableetd[3] = `Amine`;
console.log(`la taille de tableau est ${tableetd.length}`);

let tab = [];

for (let index = 1; index <=10; index++) {
    tab[index-1] = index;
}

console.log('display the table with boocle for')

for (let index = 0; index < tab.length; index++) {
    console.log(tab[index]);
}

console.log('display the table with boocle for-of')

for (let element of tab)
{
    console.log(element);
}
