let precoCombustivel = 6.17; //preço do combustivel, por litro
let gastoLitrosPorKm = 0.24; //quanto de combustivel é gasto por km. nesse caso, 0,17 litros
let distanciaEmKm = 500; //qual a distancia, em km, foi percorrida

//calculos necessarios
let litrosConsumidos = distanciaEmKm * gastoLitrosPorKm;
let gastoTotal = precoCombustivel * litrosConsumidos;

//arredondando para 2 casas decimais e imprimindo na tela
console.log("Gasto total = R$"+gastoTotal.toFixed(2)); 


