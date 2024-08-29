const prompt = require('prompt-sync')({ sigint: true });

function findMinMax() {
    let numbers = [];
    let number;


    do {
        number = parseFloat(prompt("Digite um número (digite 0 para sair):"));
        if (number !== 0) {
            numbers.push(number);
        }
    } while (number !== 0);

    if (numbers.length > 0) {

        const maxNumber = Math.max(...numbers);
        const minNumber = Math.min(...numbers);

        console.log("O maior número digitado é: " + maxNumber);
        console.log("O menor número digitado é: " + minNumber);
    } else {
        console.log("Nenhum número foi digitado.");
    }
}

findMinMax();
