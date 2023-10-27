/*
O IMC indice de massa corporal e uma criterio da organizacao mundial de saude para dar uma indicacao sobre a condicao de peso de uma pessoa adulta

formula do IMC 

imc = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo

IMC em adultos condicao:
-abaixo de 18.5 abaixo do peso
-entre 25 e 30 acima do peso
-entre 30 e 40 obeso
-acima de 40 obsidade grave
*/
const altura = 1.76;
const peso = 80;

imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
      console.log(`abaixo do peso, e seu IMC é ${imc.toFixed(2)}`);
    } else if (imc >= 18.5 && imc <= 25) {
      console.log(`peso normal, e seu IMC é ${imc.toFixed(2)}`);
    } else if (imc >= 25 && imc <= 30) {
      console.log(`acima do peso, e seu IMC é ${imc.toFixed(2)}`);
    } else if (imc >= 30 && imc <= 40) {
      console.log(`obeso, e seu IMC é ${imc.toFixed(2)}`);
    } else {
      console.log(`obsidade grave, e seu IMC é ${imc.toFixed(2)}`);
    }