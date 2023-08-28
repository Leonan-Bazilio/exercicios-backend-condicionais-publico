const caractere = "E";

const vogal = ["a", "e", "i", "o", "u"];
const numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

if (numero.includes(caractere + "")) {
  console.log("Numero");
} else if (vogal.includes(caractere)) {
  console.log("Volgal minúscula");
} else if (vogal.includes(caractere.toLowerCase())) {
  console.log("Vogal maiúscula");
} else {
  console.log("Consoante");
}
