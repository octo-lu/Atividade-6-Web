
const prompt = require('prompt-sync')();

function verificarDivisibilidade(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      console.log(`${numero} é divisível por 3 e por 5.`);
    } else {
      console.log(`${numero} não é divisível por 3 e por 5.`);
    }
  }

  const numero = parseInt(prompt('Digite um número inteiro: '), 10);
  

  verificarDivisibilidade(numero);