"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const monthsNumber = Object.values(months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNumber, 'Escolha um mês do ano');
const seasonsSouth = {
    [seasons_1.default.OUTONO]: [months_1.default.MARCO, months_1.default.ABRIL, months_1.default.MAIO, months_1.default.JUNHO],
    [seasons_1.default.INVERNO]: [months_1.default.JUNHO, months_1.default.JULHO, months_1.default.AGOSTO, months_1.default.SETEMBRO],
    [seasons_1.default.PRIMAVERA]: [months_1.default.SETEMBRO, months_1.default.OUTUBRO, months_1.default.NOVEMBRO, months_1.default.DEZEMBRO],
    [seasons_1.default.VERAO]: [months_1.default.DEZEMBRO, months_1.default.JANEIRO, months_1.default.FEVEREIRO, months_1.default.MARCO],
};
const seasonsNorth = {
    [seasons_1.default.PRIMAVERA]: seasonsSouth[seasons_1.default.OUTONO],
    [seasons_1.default.VERAO]: seasonsSouth[seasons_1.default.INVERNO],
    [seasons_1.default.OUTONO]: seasonsSouth[seasons_1.default.PRIMAVERA],
    [seasons_1.default.INVERNO]: seasonsSouth[seasons_1.default.VERAO],
};
const hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth,
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'EEscolha um hemisfério:');
const month = Object.values(months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
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
const choice = readline_sync_1.default.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");
require(scripts[choice].script); // executamos o script escolhido usando o require
