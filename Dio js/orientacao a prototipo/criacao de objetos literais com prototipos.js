const pessoa = {
    genero: 'masculino'
}

// pessoa.__proto__

const renan = Object.create(pessoa)

renan.nome = 'Renan'

console.log(renan);