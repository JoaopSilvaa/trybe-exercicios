const { expect } = require('chai');

const writeFile = require('../writeFile');

const fs = require('fs');
const sinon = require('sinon');

const CONTEUDO_PARA_ESCREVER = 'Fazendo o exercicio';
const ARQUIVO_EXERCICIO = 'arquivo.txt';

describe('Testa se a função escreve um conteúdo em um arquivo', () => {
    describe('Retorna ok', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync');
        });

        after(() => {
            fs.writeFileSync.restore();
        });
        
        const resposta = writeFile(ARQUIVO_EXERCICIO, CONTEUDO_PARA_ESCREVER);
        it('Caso conclua a escrita no arquivo', () => {
            expect(resposta).to.be.equals('ok');
        });
    });
});