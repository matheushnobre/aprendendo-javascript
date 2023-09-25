const preco = 5.99;
const parcelas = 3;
const formaPagamento = 'debito';

let valorAPagar;
if(parcelas === 1 && formaPagamento === 'debito'){
    valorAPagar = preco - preco*0.10;
} else if(parcelas === 1 && formaPagamento === 'dinheiro' || formaPagamento === 'pix'){
    valorAPagar = preco - preco*0.15;
} else if(parcelas === 2){
    valorAPagar = preco;
} else{
    valorAPagar = preco + preco*0.10;
}

console.log("Preço a pagar: "+valorAPagar.toFixed(2));