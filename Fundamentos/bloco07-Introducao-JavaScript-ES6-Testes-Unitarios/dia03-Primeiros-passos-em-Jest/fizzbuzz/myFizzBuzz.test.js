const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz deve: ', () =>{
 it('Retornar fizzbuzz se o número for divisível por 3 e 5 ', () =>{
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
 });
 it('Retornar fizz se o número for divisível por 3', () =>{
    expect(myFizzBuzz(3)).toMatch('fizz');
 });
 it('Retornar buzz se o número for divisível por 5', () =>{
    expect(myFizzBuzz(5)).toMatch('buzz');
 });
 it('Retornar o próprio número se não for divisível por 3 e 5', () =>{
    expect(myFizzBuzz(7)).toBe(7);
 });
 it('Retornar false se não for um número', () =>{
    expect(myFizzBuzz('lulu')).toBeFalsy();
 });
});