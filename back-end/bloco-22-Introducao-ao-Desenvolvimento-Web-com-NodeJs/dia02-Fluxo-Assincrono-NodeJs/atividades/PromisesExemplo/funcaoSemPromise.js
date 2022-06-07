const calcularDivisao = (num1, num2) => {
    if (num2 == 0) throw new Error('Não pode ser feito uma divisão por zero!');

    return num1 / num2;
}

try {
    const resultado = (calcularDivisao(5,2));
    console.log("resultado %s", resultado);
} catch (e) {
    console.log("erro: %s", e.message);
}