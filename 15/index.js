const primeiroNome = "Mario";
const sobrenome = "bros";
const apelido = "";

if (apelido) {
  console.log(apelido);
} else if (sobrenome) {
  if (primeiroNome) {
    console.log(primeiroNome + " " + sobrenome);
  }
} else if (primeiroNome) {
  console.log(primeiroNome);
}
