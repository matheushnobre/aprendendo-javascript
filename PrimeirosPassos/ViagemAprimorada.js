let valorEtanol = 4.87;
let valorGasolina = 6.12;
let tipoCombustivel = 'Gasolina';
let gastoMedioEtanolPorKm = 0.35;
let gastoMedioGasolinaPorKm = 0.27;
let distanciaViagem = 200;

let valorGasto;
if(tipoCombustivel === 'Gasolina'){
    valorGasto = (gastoMedioGasolinaPorKm * distanciaViagem) * valorGasolina;
} else if(tipoCombustivel === 'Etanol'){
    valorGasto = (gastoMedioEtanolPorKm * distanciaViagem) * valorEtanol;
}

console.log("Gasto da viagem: R$"+valorGasto.toFixed(2));