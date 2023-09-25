function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc){
    if(imc<18.5){
        return "Abaixo do peso";
    } else if(imc>=18.5 && imc<25){
        return "Peso normal";
    } else if(imc >=25 && imc<30){
        return "Acima do peso";
    } else if(imc>=30 && imc<40){
        return "Obeso";
    } else{
        return "Grave";
    }
}

//maneira de invocar a função principal de forma imediata
(function (){
    const peso = 58.5;
    const altura = 1.82;
    const imc = calcularIMC(peso, altura).toFixed(2);
    console.log("IMC = "+imc+"\nResultado: "+classificarIMC(imc));
})();
