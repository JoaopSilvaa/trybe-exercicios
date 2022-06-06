const { calculateImc } = require('./imc')
const { sorteio } = require('./sorteio')
const { calculateVel } = require('./velocidade')
const readLine = require('readline-sync')

console.log(`
MY - SCRIPTS, HUB de scripts de aprendizado
1 - Script IMC 
2 - Script Velocidade
3 - Script Sorteio`)
const answer = readLine.questionInt('Digite sua opção: ')
if(answer == 1) {
    console.log('------------------------------------')
    calculateImc()
} else if(answer == 2) {
    console.log('------------------------------------')
    calculateVel()
} else if(answer ==3) {
    console.log('------------------------------------')
    sorteio()
} else {
    console.log('------------------------------------')
    console.log('Digite uma opção válida!')
}
