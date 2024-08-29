const prompt = require('prompt-sync')();

function verificarDia() {

    const dia = prompt("Digite o nome do dia da semana: ").trim().toLowerCase();


    switch (dia) {
        case 'segunda-feira':
        case 'terça-feira':
        case 'quarta-feira':
        case 'quinta-feira':
        case 'sexta-feira':
            console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia útil.`);
            break;
        case 'sábado':
        case 'domingo':
            console.log(`${dia.charAt(0).toUpperCase() + dia.slice(1)} é um dia de fim de semana.`);
            break;
        default:
            console.log("Dia da semana inválido. Por favor, digite um dia válido.");
            break;
    }
}

verificarDia();