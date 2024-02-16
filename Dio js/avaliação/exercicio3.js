function comparador(a, b) {
  if (a === b) {
     igualitario = "são iguais";
  } else {
    igualitario = "não são iguais";
  }

  const soma = a + b;

  if (soma > 10) {
     maiorOuMenor10 = "maior que";
  } else {
    maiorOuMenor10 = "menor que";
  }

  if (soma > 20) {
     maiorOuMenor20 = "maior que";
  } else {
    maiorOuMenor20 = "menor que";
  }

  console.log(`Os números ${a} e ${b} ${igualitario}, Sua soma é ${soma}, que é ${maiorOuMenor10} que 10 e ${maiorOuMenor20} que 20`);
  
}

comparador(20, 20)