//substituição de texto em uma string:
let text1 = "Olá, mundo!";
let novoText = text1.replace("mundo", "JavaScript");
console.log(novoText);

//verificação de existência de uma substring em uma string:
let text2 = "Olá, mundo!";
console.log(text2.includes("mundo"));
console.log(text2.includes("JavaScrpt"))

//divisão de uma string em um array com base em um delimitador:
let text3 = "JavaScript é uma linguagem poderosa";
let palavras = text3.split(" ");
console.log(palavras);

//remoção de espaços em branco no início e no final de uma string:
let text4 = " Olá, mundo! ";
let novoText2 = text4.trim();
console.log(novoText2);

//verificação do início ou fim de uma string:
let text5 = "Olá, mundo!"
console.log(text5.startsWith("Olá"));
console.log(text5.endsWith("mundo!"));