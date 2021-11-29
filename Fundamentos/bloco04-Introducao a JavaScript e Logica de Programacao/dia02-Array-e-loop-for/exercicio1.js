let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media =0;
let maior = 0;

for(let numerosArray of numbers){
    console.log(numerosArray);
    soma = soma + numerosArray;
    if(numerosArray>maior)
        maior = numerosArray;
}
console.log('-----------------------------------------');
console.log(soma);
console.log('-----------------------------------------');
media = soma/numbers.length;
console.log(media);
console.log('-----------------------------------------');
if(media > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
console.log('-----------------------------------------');
console.log(maior);