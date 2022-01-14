const sum = require('./sum');

describe('A função de soma deve', () =>{
    it('Na soma de 4 e 5 deve retornar 9', () => {
        expect(sum(4,5)).toBe(9);
    });
    it('Na soma de 0 e 0 deve retornar 0', () => {
        expect(sum(0,0)).toBe(0);
    });

    it('No caso de receber um parâmetro como String', () => {
        expect(() => sum(4,'5')).toThrowError('parameters must be numbers')
    });
});