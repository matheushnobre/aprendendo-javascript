//criando a classe Pessoa
class Pessoa {
    nome;
    idade;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

//função para comparar pessoas: recebe duas pessoas e compara quem é mais velho
function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho`);
    } else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho`);
    } else{
        console.log("Os dois possuem a mesma idade");

    }
}

//instanciando um objeto do tipo Pessoa
const matheus = new Pessoa('Matheus Henrique', 18);
const eduardo = new Pessoa('Eduardo', 19);

//testando
matheus.descrever();
eduardo.descrever();
compararPessoas(matheus, eduardo);