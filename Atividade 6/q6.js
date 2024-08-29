const prompt = require('prompt-sync')({ sigint: true });

function fibonacciSequence(limit) {
    let n1 = 0, n2 = 1, nextTerm;
  
    console.log('Sequência de Fibonacci até ' + limit + ':');
    console.log(n1); 
    if (limit > 0) console.log(n2); 
  
    nextTerm = n1 + n2;
  
    while (nextTerm <= limit) {
      console.log(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
  }
  
  const limit = parseInt(prompt('Digite um número para exibir a sequência de Fibonacci até esse número:'));
  
  fibonacciSequence(limit);