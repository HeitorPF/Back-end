const chalk = require('chalk')

const frases = ['Muchas gracias aficcion', 'Siuuuuuuuuuu']

const fraseAlet = frases[Math.floor(Math.random() * frases.length)]

console.log(chalk.green.bold("\n Frases Teste\n"))
console.log(chalk.cyan(fraseAlet))