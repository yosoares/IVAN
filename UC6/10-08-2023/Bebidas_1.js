let nome = "Peterson";
var idade = 19;

const bebidaMaior = "Cerveja";
const bebidaMenor = "Suco";

const pedido = `${nome} diz: "Por favor, quero beber ${
  idade >= 18 ? bebidaMaior : bebidaMenor
}"`;

console.log(pedido);
