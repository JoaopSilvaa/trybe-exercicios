const { exercise } = require('./exercicio1')

const geraNumber = () => Math.floor(Math.random() * 100 + 1);

exercise(geraNumber(), geraNumber(), geraNumber())
    .then(result => console.log(result))
    .catch(err => console.log(err.message))

module.exports = {
    geraNumber
}