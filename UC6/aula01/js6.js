//
let valor = 10;
valor += 5; // equivale a: valor = valor +5
console.log(valor)

//strings
//comprimento de uma string:
let text = "Olá, mundo!";
console.log(text.length)

//acesso a caracteres individuais de uma string:
let text2 = "JavaScript";
console.log(text2[0]);
console.log(text2[4]);

//concatenação de strings:
let saudacao = "olá"
let nome = " Maria"
let mensage = saudacao + ","+nome+"!"
console.log(mensage)

//conversçao para maiúsculas e minúsculas:
let text3 = "JavaScript";
console.log(text3.toUpperCase())
console.log(text3.toLowerCase())

//extração de uma parte de uma string:
let text4 = "Olá, mundo!";
let parte = text4.slice(5, 8);
console.log(parte)