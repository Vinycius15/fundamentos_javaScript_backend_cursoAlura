// declaração de funçao

    // function minhaFunçao(){
    //   //bloco de comandos
    // }
    // minhaFunção("param")

//expressao de funcao

//const soma = function(num1, num2) {return num1 + num2}
//console.log(soma(1, 1));

// diferenças principal: HOSTING
// funções e var são listadas no topo

console.log(apresentar());
  //vai ler normalmente
function apresentar(){
    return "olá"
}

console.log(soma());
    //vai dar erro pois a variavel está sendo declarada depois da inicialização
const soma = function(num1, num2) {return num1 + num2}
