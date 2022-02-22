//  ===
// para ser igual o valor de ambos os lados tem que serem o mesmo e do mesmot tipo, ele diferencia string, numero e boolenaos
//ex.: 3 === 3(t); 3 === 2(f); 3 === "3"(f)

//==
//para ser igual os valores não precisam ser do mesmo tipo, apenas conter o mesmo conteudo
//3 === 2(f); 3 === "3"(t)

//typeof - domonstra qual o tipo da variavel

const numero = 5;
const texto = "5";

console.log(numero == texto);//true
console.log(numero === texto);//false

console.log(typeof numero); // number
console.log(typeof texto); //string
//------------------------
// outros compradores

//||: Operador “ou”, retorna true caso uma condição seja válida;

//&&: Operador “e”, retorna true somente se todas as condições forem válidas;

//!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.

