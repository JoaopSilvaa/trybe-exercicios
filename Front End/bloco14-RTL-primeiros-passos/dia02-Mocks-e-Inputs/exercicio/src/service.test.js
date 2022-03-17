const service = require('./service');

describe('Testa random de service', () => {
  it('Verifica se o retorno é 10 do random', () => {
    service.random = jest.fn().mockReturnValue(10);
    expect(service.random()).toBe(10);
  })
  it('Verifica se foi chamada e quantas vezes', () => {
    expect(service.random).toBeCalled();
    expect(service.random).toBeCalledTimes(1);
  })
});

describe('Transforma random em div service', () => {
  it('Aplicou div', () => {
    service.random = jest.fn().mockImplementationOnce( (a, b) => a / b);
    service.random(10,2)
    expect(service.random).toBeCalledTimes(1);
  })
})

describe('Transforma random em multiplicação', () => {
    it('Aplicou multi', () => {
        service.random = jest.fn().mockImplementation((a, b, c) => a*b*c);
        expect(service.random(1,2,3)).toBe(6);
        expect(service.random).toBeCalledTimes(1);
    })
    it('Resetando e colocando dobro', () => {
        service.random.mockReset();
        service.random = jest.fn().mockImplementation((a) => a*2);
        expect(service.random(2)).toBe(4);
        expect(service.random).toBeCalledTimes(1);
    } )
})
