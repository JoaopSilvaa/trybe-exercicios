const { expect } = require('chai');

const typeNumber = require('../typeNumber');

describe('Verifica se qual o tipo do número', () => {
    describe('Retorna positivo', () => {
        const resposta = typeNumber(5);
        it('Quando o valor é maior que 0 (5)', () => {
            expect(resposta).to.be.equals('positivo')
        });
    });
    
    describe('Retorna negativo', () => {
        const resposta = typeNumber(-5);
        it('Quando o valor é menor que 0 (-5)', () => {
            expect(resposta).to.be.equals('negativo')
        });
    });

    describe('Retorna neutro', () => {
        const resposta = typeNumber(0);
        it('Quando o valor é igual a 0', () => {
            expect(resposta).to.be.equals('neutro')
        });
    });

    describe('Retorna um erro', () => {
        const resposta = typeNumber('alo');
        it('Caso o parâmetro não seja número', () => {
            expect(resposta).to.be.equals('o valor deve ser um número')
        });
    });
    
});