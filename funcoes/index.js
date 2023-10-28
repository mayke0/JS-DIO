function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
  if (imc < 18.5) {
    `abaixo do peso, e seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 18.5 && imc <= 25) {
    return `peso normal, e seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 25 && imc <= 30) {
    return `acima do peso, e seu IMC é ${imc.toFixed(2)}`;
  } else if (imc >= 30 && imc <= 40) {
    return `obeso, e seu IMC é ${imc.toFixed(2)}`;
  } else {
    return `obsidade grave, e seu IMC é ${imc.toFixed(2)}`;
  }
}
function main(){
    const altura = 1.76;
    const peso = 80;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

}
main()