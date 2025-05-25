
let num = 3
let jour;

switch (num) {
    case 1:
        jour = "Lundi";
        break;
        
    case 2:
        jour = "Mardi";
        break;
    
    case 3:
        jour = "Mercredi";
        break;
    
    case 4:
        jour = "Jeudi";
        break;
    
    case 5:
        jour = "Vendredi";
        break;
    
    case 6:
        jour = "Samedi";
        break;
    
    case 7:
        jour = "Dimanche";
        break;

    default:
        jour = "Jour inconnu";
        break;
}

console.log(jour);