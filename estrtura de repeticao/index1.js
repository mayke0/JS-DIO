// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i=0; i< numeros.length; i++){
    if(numeros[i] % 2 === 0){
        console.log(`Esse numero é par ${numeros[i]}`);
    }
}

