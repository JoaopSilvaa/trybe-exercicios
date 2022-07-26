import { exit } from 'process';
import readline from 'readline-sync';
import months from './months';
import seasons from './seasons';

const monthsNumber = Object.values(months);

const choiceMonth = readline.keyInSelect(monthsNumber, 'Escolha um mês do ano');

const seasonsSouth = {
    [seasons.OUTONO]: [months.MARCO, months.ABRIL, months.MAIO, months.JUNHO],
    [seasons.INVERNO]: [months.JUNHO, months.JULHO, months.AGOSTO, months.SETEMBRO],
    [seasons.PRIMAVERA]: [months.SETEMBRO, months.OUTUBRO, months.NOVEMBRO, months.DEZEMBRO],
    [seasons.VERAO]: [months.DEZEMBRO, months.JANEIRO, months.FEVEREIRO, months.MARCO],
};

const seasonsNorth = {
    [seasons.PRIMAVERA]: seasonsSouth[seasons.OUTONO],
    [seasons.VERAO]: seasonsSouth[seasons.INVERNO],
    [seasons.OUTONO]: seasonsSouth[seasons.PRIMAVERA],
    [seasons.INVERNO]: seasonsSouth[seasons.VERAO],
}

const hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth,
};

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), 'EEscolha um hemisfério:');

const month = Object.values(months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];

    if (months.includes(month)) console.log(seasons);
    
});

const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

// criamos um novo array somente com os nomes dos scripts
const scriptNames = scripts.map(item => item.name);

// pedimos à pessoa usuária para escolher um dos scripts de conversão
const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script); // executamos o script escolhido usando o require
