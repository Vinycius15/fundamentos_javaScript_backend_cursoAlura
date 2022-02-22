 // parametros de funções

 function soma(num1, num2){
     return num1 + num2;
 }

 //console.log(soma(55, 45));

function multiplicacao(numero1, numero2){
    return numero1 * numero2
}

console.log(multiplicacao(soma(10, 12), soma(2, 7)));

function multiplicacao(numero1 = 1, numero2 = 1){
    return numero1 * numero2
}

console.log(multiplicacao(soma(10, 12)));

// outros exemplos

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')

//
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”