const {gets, print} = require('./FuncoesAuxiliares'); //importa as funções auxilaires gets e print

function calculateMedia(){
    const numberOfTests = gets(); //lê o número de notas inseridas
    let count=0; //contador para saber a nota total do aluno
    for(let i=0; i<numberOfTests; i++){ //lendo as notas inseridas
        count += gets();
    }
    return (count / numberOfTests).toFixed(2); //calculando e retornando a media 
}

function classifyMedia(media){
    if(media<5){
        return 'reprovado';
    } else if(media >= 5 && media < 7){
        return 'recuperação';
    } else{
        return 'aprovado';
    }
}

(function (){
    print(`Média do aluno: ${calculateMedia()}. Situação: ${classifyMedia(calculateMedia)}.`);
})(); 