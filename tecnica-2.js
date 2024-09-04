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