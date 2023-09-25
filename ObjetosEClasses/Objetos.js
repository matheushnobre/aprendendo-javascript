//estrutura objeto literal
const pessoa = {
    nome: 'Matheus Henrique',
    idade: 18,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.descrever();

//acessando valores de forma dinâmica
const atributo = 'idade';
console.log(pessoa[atributo]);