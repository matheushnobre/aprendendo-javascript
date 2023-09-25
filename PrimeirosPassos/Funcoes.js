//Funções são pequenos trechos de código que podemos invocar a qualquer momento

//sintaxe: function nomeDaFuncao(){}
function imprimirNome(texto){
    console.log("Seu nome é: "+texto);
}

//evocando uma função
let nome = "Matheus"
imprimirNome(nome);
imprimirNome("Flamengo");

//função com retorno
function calcularQuadrado(valor){
    return valor * valor;
}

console.log(calcularQuadrado(5));

//outro exemplo
function incrementarJuros(valor, percentual){
    return valor + (valor * (percentual/100));
}

console.log(incrementarJuros(500, 10));