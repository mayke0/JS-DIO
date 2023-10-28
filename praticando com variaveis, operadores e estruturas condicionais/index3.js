/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a ecolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual condicao de pagamento escolhida e afetuar o calculo adequado 

Codigo condicao de pagamento:
-a vista debito, recebe 10% de desconto
-a vista no dinheiro ou pix, recebe 15% de desconto
-em duas vezes, preco normal de etiqueta sem juros 
-acima de duas vezes, preco normal de etiqueta mais juros de 10%
*/
const formaPagamento = "a vista debito";
const pagamento = 1500;
const parcela = 1;
if (formaPagamento === "a vista debito") {
  console.log(pagamento * 0.9);
} else if (formaPagamento === "a vista no dinheiro") {
  console.log(pagamento * 0.85);
} else if (formaPagamento === "em duas vezes" && parcela === 2) {
  console.log(`2x${pagamento / parcela}`);
} else if (formaPagamento === "acima de duas vezes" && parcela > 2) {
  console.log(
    `${parcela}x ${((pagamento + pagamento * 0.1) / parcela).toFixed(2)}`
  );
}else{
    console.log();
}
