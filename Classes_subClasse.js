


class Pessoa { //Criação de uma classe

    _nome
    _idade
    _peso
    _altura
    _imc
    static totalDePessoas = 0; // Atributo static é atributo de Class e não de cada
                              // objeto criado a partir da classe

    constructor (nome,idade,peso,altura){
        this._nome = nome;
        this._idade = idade;
        this._peso= peso;
        this._altura = altura;
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2);
        Pessoa.totalDePessoas += 1; // contador 
    }

    calculaImc(){
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get totalDePessoas (){ // atributo Get é para pegar valores 
        return Pessoa.totalDePessoas;
    }
    get nome (){ // atributo Get é para pegar valores 
        return Pessoa.nome;
    }
    get idade (){ // atributo Get é para pegar valores 
        return Pessoa.idade;
    }
    get peso (){ // atributo Get é para pegar valores 
        return Pessoa.peso;
    }
    get altura (){ // atributo Get é para pegar valores 
        return Pessoa.altura;
    }

    set nome (novoNome){ // atributo Set é atributo de alteração de valores
        this._nome = novoNome; // Preciso de um parâmetro em Set 
    }
    set idade (novaIdade){ // atributo Set é atributo de alteração de valores
        this._idade = novaIdade; // Preciso de um parâmetro em Set 
    }
}
let pessoa1  = new Pessoa('Erik', 35, 81.2, 1.75);
let pessoa2 = new Pessoa('Larissa', 32, 85, 1.69);
let pessoa3 = new Pessoa('Derick', 19, 37, 1.49);

console.log(pessoa1); // Acesso as informações do Let segundo a ordem do constructor
console.log(pessoa2);
console.log(pessoa3);

console.log("Nome "  + pessoa1._nome); // Estou pegando pelo Get e imprimindo no console
console.log("Idade " + pessoa1._idade);

pessoa1.nome = 'Bella'; // Estou setando um novo valor para o nome
pessoa1.idade = 3; // Estou setando uma nova idade

console.log("Nome "  + pessoa1._nome); //imprimindo no console os novos valores
console.log("Idade " + pessoa1._idade); 

console.log("Total de Pessoas = " + Pessoa.totalDePessoas); // Acesso a informação do contador

console.log(pessoa1.calculaImc()); // Acesso as informações segundo o metodo calculaImc()
console.log(pessoa2.calculaImc());

