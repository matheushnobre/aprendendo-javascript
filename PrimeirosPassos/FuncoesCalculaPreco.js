function aplicarDesconto(valor, percentual){
    return (valor - valor * (percentual/100)).toFixed(2);
}

function aplicarJuros(valor, percentual){
    return (valor + valor * (percentual/100)).toFixed(2);
}

function verificarValor(valor, parcelas, formaPagamento){
    if(parcelas === 1 && formaPagamento === 'debito'){
        return aplicarDesconto(valor, 10);
    } else if(parcelas === 1 && formaPagamento === 'dinheiro' || formaPagamento === 'pix'){
        return aplicarDesconto(valor, 15);
    } else if(parcelas === 2){
        return valor;
    } else{
        return aplicarJuros(valor, 10);
    }
}

(function (){
    const valor = 5.99;
    const parcelas = 3;
    const formaPagamento = 'debito';

    console.log(verificarValor(valor, parcelas, formaPagamento));
})();