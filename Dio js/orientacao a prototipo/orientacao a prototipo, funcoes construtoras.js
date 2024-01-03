function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
  console.log(`Meu nome é: ${this.nome}`);
};
const eu = new Pessoa('Maycon', 25)

eu.falar()

// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   falar() {
//     console.log(`Meu nome é: ${this.nome}`);
//   }
// }
// const eu = new Pessoa('Maycon', 25)

// console.log(eu.falar());