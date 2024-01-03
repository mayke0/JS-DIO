const pessoa = {
    idade: 16
}

const renan = {
    nome: 'renan',
    // idade: 30,
    __proto__: pessoa
}

console.log(renan.idade);