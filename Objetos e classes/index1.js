// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC.
class pessoas {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc(){
    if (this.calcularImc() < 18.5) {
        `abaixo do peso, e seu IMC é ${this.calcularImc().toFixed(2)}`;
      } else if (this.calcularImc() >= 18.5 && this.calcularImc() <= 25) {
        return `peso normal, e seu IMC é ${this.calcularImc().toFixed(2)}`;
      } else if (this.calcularImc() >= 25 && this.calcularImc() <= 30) {
        return `acima do peso, e seu IMC é ${this.calcularImc().toFixed(2)}`;
      } else if (this.calcularImc() >= 30 && this.calcularImc() <= 40) {
        return `obeso, e seu IMC é ${this.calcularImc().toFixed(2)}`;
      } else {
        return `obsidade grave, e seu IMC é ${this.calcularImc().toFixed(2)}`;
      }
  }
}

const eu = new pessoas("Maycon", 80, 1.78);
console.log(eu.classificarImc());
