function pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}

pessoa.prototype.falar = function (){

    console.log(` Meu nome é ${this.nome}`);
}

const renan = {
    genero: 'Masculino'
}

pessoa.call(renan, 'nome', 30)

console.log(renan);