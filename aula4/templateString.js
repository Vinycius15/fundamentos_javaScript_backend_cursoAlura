// maneira mais facil e dinamica de escrever textos

const nome = "Vinycius";
const idade = 2022 - 2001;
const cidadeNascimento = "Joinville";

// em vez de usarmos um monte de concatenação usamos o template ( que é um modo de escrever)

//usa-se acento agudo de crase em vez de aspas
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} anos, e nasci na cidade de ${cidadeNascimento}`

console.log(apresentacao)

// outro exemplo

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
