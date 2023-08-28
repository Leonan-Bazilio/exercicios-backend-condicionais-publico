const nota = 8.5;

if (nota >= 0 && nota < 4) {
  console.log(`O estudando obteve conceito E`)
} else if (nota < 6) {
  console.log(`O estudando obteve conceito D`)
} else if (nota < 8) {
  console.log(`O estudando obteve conceito C`)
} else if (nota < 9) {
  console.log(`O estudando obteve conceito B`)
} else if (nota < 10) {
  console.log(`O estudando obteve conceito A`)
} else {
  console.log("Nota invalida")
}