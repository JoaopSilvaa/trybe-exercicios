//Fatorial com recursividade e Operador Ternário
const fatorial = a =>  a == 0 ? 1 : (a * fatorial(a-1)); 
    // let number = 1;
    // for (let i = 0; i < a; i += 1){
    //    number = number * (a - i);
    // }
    // return number;

console.log(fatorial(7));

console.log('--------------------------------------------------------------');

const maior = => 
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'