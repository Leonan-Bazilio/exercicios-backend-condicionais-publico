//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 250000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
let mesesDecorridos = 10;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos < 200000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`
  );
} else if (mesesDecorridos > 60) {
  console.log(
    `Não precisara ser pago mais nenhum valor pois o tempo decorrido excedeu o prazo de 60 meses`
  );
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log(`Voce ja realizou o pagamento total`);
} else {
  const valorPendente = 1800000 - totalJaPagoPeloAluno;
  const valorMensal = rendaMensalEmCentavos * 0.18;
  const valorUltimoMes = valorPendente % valorMensal;
  let qteMensalidadePendente = Math.floor(valorPendente / valorMensal);
  let count = 0;
  while (
    qteMensalidadePendente > 0 &&
    mesesDecorridos <= 60 &&
    valorPendente - (count * valorMensal + valorUltimoMes) > 0
  ) {
    qteMensalidadePendente = qteMensalidadePendente - 1;
    mesesDecorridos++;
    count++;
    if (qteMensalidadePendente == 0) {
      if (valorUltimoMes != 0) {
        console.log(
          `Voce necessita pagar ${count} parcelas no valor de ${
            valorMensal / 100
          } reais e uma ultima parcela no valor de ${
            valorUltimoMes / 100
          }, isso mais o valor ja pago de ${
            totalJaPagoPeloAluno / 100
          } reais voce tera pago o valor total, assim quitando sua divida `
        );
      } else {
        console.log(
          `Voce necessita pagar ${count} parcelas no valor de ${
            valorMensal / 100
          } reais, isso mais o valor ja pago de ${
            totalJaPagoPeloAluno / 100
          } reais voce tera pago o valor total, assim quitando sua divida`
        );
      }
    } else if (mesesDecorridos == 60) {
      console.log(
        `Voce pagou ${count} de parcelas no valor de ${
          valorMensal / 100
        } reias resultando num valor total pago de ${
          (count * valorMensal + totalJaPagoPeloAluno) / 100
        } e não necessita realizar mais nenhum pagamento ja que o periodo de 60 meses decorrido ja passou`
      );
    }
  }
}
