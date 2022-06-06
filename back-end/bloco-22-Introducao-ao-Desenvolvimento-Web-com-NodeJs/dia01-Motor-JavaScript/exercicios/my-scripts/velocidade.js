const readLine = require('readline-sync')
const calculateVel = () => {
    const vel = (distancia,tempo) => distancia / tempo;
    const distancia = readLine.questionInt('Digite a distancia em metros ')
    const tempo = readLine.questionInt('Digite o tempo em segundos ')
    console.log(`A velocidade média é: ${vel(distancia, tempo)} m/s`)
}

module.exports = {calculateVel}