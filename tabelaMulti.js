// Tabela de multiplicação: Peça ao usuário um número e exiba a tabuada desse número até o 10.
const rl = require('readline-sync');

const number = rl.questionFloat('Digite um numero para mostrar sua tabuada: ', {limitMessage: 'Insira um valor valido'});

for (let i = 1; i <= 10; i++) {
    let conta = number * i;
    console.log(`${number} x ${i} = ${conta}`);
}





