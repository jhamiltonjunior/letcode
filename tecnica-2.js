Técnica 1)

function fibonacciSequence(limit) {
  const sequence = [0, 1];
  let nextNum = sequence[0] + sequence[1];

  while (nextNum <= limit) {
    sequence.push(nextNum);
    nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence;
}

function isFibonacci(num) {
  const sequence = fibonacciSequence(num);
  return sequence.includes(num);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe um número: ', (answer) => {
  const numberToCheck = parseInt(answer);
  if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
  }
  rl.close();
});


Técnica 2)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe uma string: ', (inputString) => {
  const regex = /a/gi;
  const matches = inputString.match(regex);
  const count = matches ? matches.length : 0;

  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }

  rl.close();
});




