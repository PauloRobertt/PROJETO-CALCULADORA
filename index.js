import entradaDados from 'readline-sync'

var juros;

console.log("Aplicação de Juros:");

console.log()

let valorDevido = entradaDados.question("Informe o valor devido: R$ ");

let DiasVencimento = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

if(DiasVencimento > 15){
    juros = 10;
}else if(DiasVencimento == 0){
    juros = 0;
}else{
    juros = 5;
}

var totvJuros = (Number(juros) * Number(valorDevido)) + Number(valorDevido);

if(DiasVencimento != 0){
    console.log()

    console.log("Valor original da dívida: R$ "+valorDevido);
    console.log("Dias atrasados: "+DiasVencimento);
    console.log("Taxa de Juros: "+juros+"%");
    console.log("Valor total com juros: R$ "+totvJuros);
}else{
    console.log("Você está em dia!")
}