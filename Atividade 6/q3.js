const prompt = require('prompt-sync')();

function verificarIdades() {

    const idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "), 10);
    const idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "), 10);
    const idade3 = parseInt(prompt("Digite a idade da terceira pessoa: "), 10);

   
    const ehMaiorDeIdade = idade => idade >= 18;

   
    const todasMaiores = ehMaiorDeIdade(idade1) && ehMaiorDeIdade(idade2) && ehMaiorDeIdade(idade3);
    const todasMenores = !ehMaiorDeIdade(idade1) && !ehMaiorDeIdade(idade2) && !ehMaiorDeIdade(idade3);

    if (todasMaiores) {
        console.log("Todas as pessoas são maiores de idade.");
    } else if (todasMenores) {
        console.log("Todas as pessoas são menores de idade.");
    } else {
        console.log("Alguma(s) pessoa(s) é(são) maior(es) de idade.");
    }
}

verificarIdades();