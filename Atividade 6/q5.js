const prompt = require('prompt-sync')({ sigint: true });


function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const N = parseInt(prompt("Digite um número N:"));

console.log('Números primos menores que ${N}:');
for (let i = 2; i < N; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
