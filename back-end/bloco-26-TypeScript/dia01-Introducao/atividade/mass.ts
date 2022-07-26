import readline from "readline-sync";
const unitsMass = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = unitsMass.indexOf(fromUnit);
    const toIndex = unitsMass.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a unidade base:");
  
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(unitsMass, "Escolha um número para a conversão:");
  
  
    const fromUnitChoice = unitsMass[fromUnitChoiceIndex];
    const toUnitChoice = unitsMass[toUnitChoiceIndex];
  
    const result = convertMass(value, fromUnitChoice, toUnitChoice)
  
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`
  
    // printamos a mensagem de saída no terminal
    console.log(message);
  }
  
  exec();