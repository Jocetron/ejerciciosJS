
let calificacion ;
let nota;
if(calificacion >= 0 && calificacion <= 5){
    nota = "Insufuciente";
} else if (calificacion >= 6 && calificacion  <= 8) {
    nota = "Sufuciente";
}else if (calificacion >= 9 && calificacion <=10) {
    nota = "Sobresaliente";
} else {
    nota = "Calificacion no valida";
}
console.log("Tu calificacion fue: " nota);