const readLine = require('readline-sync')
const sorteio = () => {
    const number = readLine.questionInt('Digite um número ')
    const randomNumber = Math.floor(Math.random() * 10)
    number == randomNumber ? console.log('Parabéns, número correto!') : console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
    const answer = readLine.question('Deseja jogar novamente? (s/n) ')
    answer == 'n' ? console.log('Vlw flw') : sorteio()
}

module.exports = {sorteio}