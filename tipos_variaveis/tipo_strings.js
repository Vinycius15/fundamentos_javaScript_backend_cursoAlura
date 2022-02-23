const texto1 = "Olá, mundo";
console.log(texto1);

const senha = "senhaSegura1289!!";
 
const citacao =  "Meu nome é: ";
const meuNome = "Vinycius"
console.log(citacao);

// concatenação

 console.log(citacao + meuNome);

// transformação de strings

    //Os caracteres '\u' no início do código são caracteres
    //de escape que usamos para sinalizar ao JavaScript de
    //que estamos falando de códigos Unicode, e não de
    //strings de texto usuais.

    //O JavaScript usa, por padrão, o UTF-16. 
    //O número 16 está relacionado aos espaços em bits 
    //ocupados por cada caractere, 16 neste caso.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//comparação entre strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
// 3(=) a string tem que ser identica para dar verdadeiro.

//transformando input em letras minuscula
const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // True

//quantidade minima de strings/lenght
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


//template string ou template literal
    //Também chamado de Template Strings é um recurso da
    //inguagem que permite declarar strings dentro das
    //quais podemos interpolar valores ou ainda quebrar o
    //texto em múltiplas linhas.

    //Com a sintaxe de Template Literals podemos substituir as aspas pelo caractere "`" 
    //permitindo quebrar o texto em várias linhas:

`Texto inicial ${[ valor ]} e texto final`

//exemplo 1

    //assim sem uso de crase 
    const texto = "Amor é fogo que arde sem se ver\nÉ ferida que dói e não se sente"

    //ou assim com uso de crase
    const texto = `Amor é fogo que arde sem se ver
    É ferida que dói e não se sente`