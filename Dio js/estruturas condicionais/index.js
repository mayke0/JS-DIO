/*
Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis, sendo elas:

1 preço do etanol
2 preço do gasolina
3 O tipo de combustivel que está no seu carro
4 gasto medio ded combustivel do carro por KM
Distância de KM da viagem

imprima no console o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 5.79;
const prercoGasolina = 6.66;
const mediaPorkm = 10;
const distanciaEmkm = 100;
const tipoCombustivel = "Etanol";
const litrosConsumidos = distanciaEmkm / mediaPorkm;

if (tipoCombustivel === "Etanol") {
  const valorGastos = litrosConsumidos * precoEtanol;
  console.log(valorGastos.toFixed(2));
} else {
  const valorGastos = litrosConsumidos * prercoGasolina;
  console.log(valorGastos.toFixed(2));
}
