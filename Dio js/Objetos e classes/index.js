
// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.
class carros {
  marca;
  cor;
  gastoPorKm;

constructor(marca, cor, gastoPorKm){
    this.marca = marca
    this.cor = cor
    this.gastoPorKm = gastoPorKm

}

calcularGastoDePercurso(distanciaKm, precoCombustivel){
    return distanciaKm * this.gastoPorKm * precoCombustivel

}

}
const uno = new carros('Fiat', 'preto', (1/12).toFixed(3));

console.log(uno.calcularGastoDePercurso(70, 5).toFixed(3));
