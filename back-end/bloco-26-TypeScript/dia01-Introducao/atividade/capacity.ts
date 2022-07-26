import readline from "readline-sync";
const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsCapacity.indexOf(fromUnit);
    const toIndex = unitsCapacity.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(unitsCapacity, "Escolha um número para a unidade base:");
  
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(unitsCapacity, "Escolha um número para a conversão:");
  
  
    const fromUnitChoice = unitsCapacity[fromUnitChoiceIndex];
    const toUnitChoice = unitsCapacity[toUnitChoiceIndex];
  
    const result = convertCapacity(value, fromUnitChoice, toUnitChoice)
  
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  
    // printamos a mensagem de saída no terminal
    console.log(message);
  }
  
  exec();