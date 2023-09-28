const {gets, print} = require('./FuncoesAuxiliares'); //importando o codigo com as funções auxiliares

(function (){ //função principal
    let numeroEntradas = gets(); //lê o número de entradas
    let maiorPar = 0; 
    let menorImpar = 0;
    for(let i=0; i<numeroEntradas; i++){ //percorrendo a entrada para fazer as verificações
        const numero = gets(); //pega um numero para analisar
        if(numero%2===0){ //verificando se é par
            if (numero>maiorPar){ //verifica se é o maior par
                maiorPar = numero;
            }
        } else{ //se for impar
            if(menorImpar===0){ //caso seja o primeiro impar digitado
                menorImpar = numero;
            } else if(numero < menorImpar){ //se for menor do que o atual menor impar
                menorImpar = numero;
            }
        }
    }
    print(maiorPar); //imprimindo resultado na tela
    print(menorImpar);
})();