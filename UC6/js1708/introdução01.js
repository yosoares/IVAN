function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;

    this.id = function(){
        console.log(`My name is ${this.nome} and i've ${this.idade}`)

    }
}
const joao = new Pessoa("João", 20)
const peter = new Pessoa("Peterson", 29)
const laura = new Pessoa("Laura", 19)

joao.id();
peter.id();
laura.id();