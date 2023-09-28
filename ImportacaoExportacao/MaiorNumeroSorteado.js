const {gets, print} = require("./FuncoesAuxiliares");

const quantidadeEntradas = gets();
let maiorValorEncontrado = -1;
for(let i=0; i<quantidadeEntradas; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);