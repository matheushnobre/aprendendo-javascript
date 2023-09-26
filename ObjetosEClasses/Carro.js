class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularPrecoPercurso(valorCombustivel, distanciaEmKm){
        return (distanciaEmKm * this.gastoMedioPorKm) * valorCombustivel;
    }
}

const fusca = new Carro(fusca, 'azul', 0.25);
console.log(fusca.calcularPrecoPercurso(6, 200));