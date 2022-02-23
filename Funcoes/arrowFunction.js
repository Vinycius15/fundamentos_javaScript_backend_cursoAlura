function apresentarNome(nome){
    return `Meu nome é ${nome}`
}

//arrow function
                    //paramentro
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow function mais de 1 linha de isntrução

const somaNumerosPesquenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "Somente numeros de 1 a 9"
    }else {
       return num1 + num2
    }
}