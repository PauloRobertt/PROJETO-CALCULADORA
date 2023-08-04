import entradaDados from 'readline-sync'

console.log("Aplicação de Juros:");

console.log()

let valorDevido = entradaDados.question("Informe o valor devido: R$ ");

if(valorDevido > 0){

    let DiasVencimento = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    
    if(DiasVencimento == 0){
        
        console.log("Você está em dia!")
        
    }else if(DiasVencimento > 0){

        var juros = DiasVencimento > 15 ? 10 : 5;

        var totvJuros = ((juros / 100) * valorDevido) + Number(valorDevido) ;
        
        console.log()

        console.log("Valor original da dívida: R$ "+valorDevido);
        console.log("Dias atrasados: "+DiasVencimento);
        console.log("Taxa de Juros: "+juros+"%");
        console.log("Valor total com juros: R$ "+totvJuros);
    }

}else if(valorDevido <= 0){
    console.log("O valor da dívida deve ser maior que zero!")
}