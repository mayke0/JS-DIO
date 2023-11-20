// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const numeros = [5, 3, 4, 1, 10, 8];

let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (numero in numeros) {
  if (numeros[numero] % 2 === 0) {
    if (numeros[numero] > maiorNumeroPar) {
      maiorNumeroPar = numeros[numero];
    }
  } else {
    menorNumeroImpar = numeros[numero];
  }
  if (numeros[numero] < menorNumeroImpar) {
    menorNumeroImpar = numeros[numero];
  }
}
console.log(maiorNumeroPar);
console.log(menorNumeroImpar);
