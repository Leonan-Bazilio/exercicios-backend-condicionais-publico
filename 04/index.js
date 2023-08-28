const ladoA = 3;
const ladoB = 3;

//seu código aqui
if (ladoA === ladoB) {
  switch (ladoA) {
    case 0:
      console.log("Bucha de branco")
      break;
    case 1:
      console.log("Bucha de ás")
      break;
    case 2:
      console.log("Bucha de duque")
      break;
    case 3:
      console.log("Bucha de terno")
      break;
    case 4:
      console.log("Bucha de quadra")
      break;
    case 5:
      console.log("Bucha de quina")
      break;
    case 6:
      console.log("Bucha de sena")
      break;
    default:
      console.log("Valor invalido")
  }
} else {
  console.log("NÃO");
}
