const prompt = require('prompt-sync')({ sigint: true });

function countVowels(phrase) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0;
  
    
    for (let i = 0; i < phrase.length; i++) {
     
      if (vowels.includes(phrase[i])) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  
  const phrase = prompt("Digite uma frase:");
  

  const numberOfVowels = countVowels(phrase);
  console.log("A quantidade de vogais na frase é: " + numberOfVowels);
  