const { geraNumber } = require('./exercicio2');
const { exercise } = require('./exercicio1');

const main = async () => {
    try {
        await exercise(geraNumber(), geraNumber(), geraNumber());
    } catch (err) {
        console.log(err.message)
    }   
}

main();