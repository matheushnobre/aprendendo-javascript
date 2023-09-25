const nota1 = 6;
const nota2 = 10;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
if(media>=7){
    console.log("Passou de ano");
} else if(media>=5 && media<7){
    console.log("Recuperação");
} else{
    console.log("Reprovado");
}