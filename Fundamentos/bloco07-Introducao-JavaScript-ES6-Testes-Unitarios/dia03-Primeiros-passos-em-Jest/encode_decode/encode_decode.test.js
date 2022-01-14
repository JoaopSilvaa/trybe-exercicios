const {encode, decode} = require('./encode_decode');

describe('As funções são funções? :O', () =>{
    it('encode e decode são funções :D', () => {
        expect(typeof encode && typeof decode).toEqual('function');
    })
})

describe('A função encode deve: ', () =>{
    it('Converter as vogais em números', () =>{
        expect(encode('alo moral da macaxeira')).toMatch('1l4 m4r1l d1 m1c1x23r1');
    });
    it('Quando criptografada, deve ter o mesmo tamanho', () => {
        expect(encode('alo').length).toEqual(3);
    });
});

describe('A função decode deve: ', () =>{
    it('Converter os números em vogais', () =>{
        expect(decode('1l4 m4r1l d1 m1c1x23r1')).toMatch('alo moral da macaxeira');
    });
    it('Quando descriptografada, deve ter o mesmo tamanho', () => {
        expect(encode('1l4').length).toEqual(3);
    });
});
