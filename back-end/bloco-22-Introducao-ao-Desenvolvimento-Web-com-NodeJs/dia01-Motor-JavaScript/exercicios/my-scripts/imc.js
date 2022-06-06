const readLine = require('readline-sync')
const calculateImc = () => {
    const peso = readLine.questionFloat('Digite seu peso ')
    const altura = readLine.questionFloat('Digite sua altura em metros ')
    const imc = (peso, altura) => peso / (altura*altura);
    const userImc = imc(peso, altura).toFixed(2)
    console.log(`Seu IMC é: ${userImc}`)
    if(userImc < 18.5) {
        console.log('Abaixo do peso(magreza)')
    } else if(userImc >= 18.5 && userImc <= 24.9) {
        console.log('Peso normal')
    } else if(userImc >= 25.0 && userImc <= 29.9) {
        console.log('Acima do peso(sobrepeso)')
    } else if(userImc >= 30.0 && userImc <= 34.9) {
        console.log('Obesidade grau I')
    } else if(userImc >= 35.0 || userImc <= 39.9) {
        console.log('Obesidade grau II')
    } else {
        console.log('Obesidade graus III e IV')
    }
}
module.exports = {calculateImc}