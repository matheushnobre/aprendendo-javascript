//JavaScript não declara o tipo de dado, então utilizamos os valores booleanos da seguinte forma:
const isAzul = true;
const isBlack = false;

//Utilizando if e else
if(isAzul){
    console.log("É azul");
} else{
    console.log("Não é azul");
}


/*
Operadores de igualdade
== ignora o tipo de dado
=== mais comum 
*/
//verificando se é par
const numero = 10;
const isPar = (numero % 2) === 0; //utilizando valores booleanos

if(isPar){
    console.log(numero+" é par");
} else{
    console.log(numero+" é ímpar");
}

//divisivel por 5
const numero2=0;
const isDivisivelPor5 = (numero2 % 5) === 0;
if(numero2 === 0){
    console.log("Inválido");
} else if(isDivisivelPor5){
    console.log("Sim");
}else{
    console.log("Não");
}
