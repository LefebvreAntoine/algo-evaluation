/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function signe(nombre) {
    if (nombre > 0) {
        return ("POSITIVE")
    } else if (nombre < 0) {
        return ("NEGATIVE");
    } else{
        return ("NUL")
    }
    
}console.log(signe(2))



/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */
function nombresPairs(nombres) {
    var tableauPair = [];
    var tableauFinal=0;
    var nombre = 0;
    while (nombre < nombre.length) {
        if (nombre[nombres] % 2 === 0) {
            tableauPair[tab] = nombre[nombres];
            tab++;
        }
        nombres++
    }
    return tableauPair
}
var tabFinal =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(nombresPairs(tabFinal))
