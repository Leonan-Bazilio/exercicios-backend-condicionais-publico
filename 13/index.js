//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
  console.log(
    `Valor a ser pago: R$${((valorDoProduto / 100) * 0.95).toFixed(2)}`
  );
} else if (tipoDePagamento === "cheque") {
  console.log(
    `Valor a ser pago: R$${((valorDoProduto / 100) * 0.97).toFixed(2)}`
  );
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  console.log(
    `Valor a ser pago: R$${((valorDoProduto / 100) * 0.9).toFixed(2)}`
  );
} else console.log("forma de pagamento invalida");
