const exercise = (num1, num2, num3) => {
    return new Promise((resolve, reject) => {
        if(typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
            return reject(new Error('Informe apenas números'));
        }
        const resultado = ((num1 + num2) * num3);
        if(resultado < 50) reject(new Error('Valor muito baixo'));
        resolve(resultado);
    });
}

// exercise(10, 10, 2)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message))

module.exports = {exercise}