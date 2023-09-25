//criando a classe Pessoa
class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

//instanciando um objeto do tipo Pessoa
const matheus = new Pessoa();
matheus.nome = 'Matheus Henrique';
matheus.idade = 18;

matheus.descrever();