const myRemove = require('./myRemove');

describe('A função de remover número no array', () => {
    it('Deve retornar o array [1, 2, 4] quando solitar remoção do 3 no array [1, 2, 3, 4]', () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
    });
    it('Não deve retornar o array [1, 2, 3, 4] quando solicitar remoção do 3', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
    })
    it('Deve retornar o array [1, 2, 3, 4] quando solicitar remoção do 5', () => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
    })
});