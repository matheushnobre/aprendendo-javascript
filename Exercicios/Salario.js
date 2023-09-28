const {gets, print} = require('./FuncoesAuxiliares'); //importando outro codigo

function calcularImposto(salarioBruto){
    let imposto;
    if(salarioBruto<=1100){
        imposto = salarioBruto*0.05; //calcula 5% de imposto
    } else if(salarioBruto>1100 && salarioBruto<=2500){
        imposto = salarioBruto*0.1; //calcula 10% de imposto
    } else{
        imposto = salarioBruto*0.15; //calcula 15% de imposto
    }
    return imposto
}

function calcularSalario(salarioBruto, adicional){
    return salarioBruto - calcularImposto(salarioBruto) + adicional;
}

(function (){ //função principal, que será executada automaticamente
    //lendo a entrada de dados
    const salarioBruto = gets();
    const adicional = gets();
    print(calcularSalario(salarioBruto, adicional));
})();