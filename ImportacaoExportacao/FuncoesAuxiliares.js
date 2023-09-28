const entradas = [7, 50, 214, 98, 23, 842, 12, 1035];
let i = 0;

function gets(){ 
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print}; //exportando as funções para serem utilizadas em outro codigo javascript