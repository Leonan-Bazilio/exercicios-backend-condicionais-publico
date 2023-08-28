//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 178;

const valorCadaParcela = valorDoProduto / 100 / quantidadeDoParcelamento;
const qteParcelasRestante =
  quantidadeDoParcelamento - valorPago / valorCadaParcela;
if (valorPago % (valorDoProduto / quantidadeDoParcelamento / 100) == 0) {
  console.log(
    `Restam ${qteParcelasRestante} parcelas de R$${valorCadaParcela.toFixed(2)}`
  );
} else {
  const parcelasInt = qteParcelasRestante - (qteParcelasRestante % 1);
  const valorParcelaFinal = (qteParcelasRestante % 1) * valorCadaParcela;
  const aux = valorParcelaFinal / parcelasInt;
  console.log(
    `Restam ${parcelasInt} parcelas de R$${valorCadaParcela.toFixed(
      2
    )} e 1 parcela no valor de R$${valorParcelaFinal.toFixed(
      2
    )} ou ${parcelasInt} parcelas de R$${(valorCadaParcela + aux).toFixed(2)}`
  );
}
