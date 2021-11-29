let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media =0;
let maior = 0;
let impar =0;
let menor = numbers[0];

for(let numerosArray of numbers){
    console.log(numerosArray);
    soma = soma + numerosArray;
    if(numerosArray>maior)
        maior = numerosArray;
    if(numerosArray % 2 != 0)
        impar += 1;
    if(numerosArray<menor)
    menor=numerosArray;
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
console.log('-----------------------------------------');
if(impar>0){
    console.log("Existem " + impar + " impar(es) no array!");
}else{
    console.log("Nenhum valor ímpar encontrado");
}
console.log('-----------------------------------------');
console.log(menor);
console.log('-----------------------------------------');
let array = [];

for(let i=1; i<26; i+=1){
    array.push(i);    
}
for(let divDois of array)
    console.log(divDois/2);
