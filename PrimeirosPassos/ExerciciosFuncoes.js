function exibirNome(nome){
    console.log('Meu nome é '+nome);
}

function verificarIdade(idade){
    if(idade<18){
        console.log("Você é menor de idade");
    } else{
        console.log("Você é maior de idade");
    }
}

function imprimirInfos(nome, idade){
    exibirNome(nome);
    verificarIdade(idade);
}

(function (){
    imprimirInfos('Matheus Henrique', 18);
})(); 