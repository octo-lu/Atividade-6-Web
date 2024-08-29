const prompt = require('prompt-sync')();


function encontrarMaiorEMenor() {

    const num1 = parseFloat(prompt("primeiro número: "));
    const num2 = parseFloat(prompt("segundo número: "));
    const num3 = parseFloat(prompt("terceiro número: "));


    let maior = num1;
    let menor = num1;

    if (num2 > maior) maior = num2;
    if (num2 < menor) menor = num2;


    if (num3 > maior) maior = num3;
    if (num3 < menor) menor = num3;


    console.log('O maior número é ${maior}');
    console.log('O menor número é ${menor}');
}

encontrarMaiorEMenor();