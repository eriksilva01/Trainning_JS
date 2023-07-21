

class Num {
    nome;
    idade;
    altura;

    constructor (nome,idade, altura){
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
        
    }
}
let pessoa1 = new Num('Erik',18,1.75);
let pessoa2 = new Num('Lary',25, 1.64);

console.log(pessoa1);
console.log(pessoa2);

