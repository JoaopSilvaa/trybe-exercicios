let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

/*
Ordenando com o Burbble sort em ordem crescente 
for(let j=0; j<10; j+=1){
    for (let i=0; i<numbers.length; i+=1){
        if(numbers[i] > numbers[i+1]){
            change = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i] = change;
        }
    }
}

console.log(numbers);
 */

/* 
Ordenando com o Burbble sort em ordem decrescente
for(let j=0; j<10; j+=1){
    for (let i=0; i<numbers.length; i+=1){
        if(numbers[i] < numbers[i+1]){
            change = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i] = change;
        }
    }
}

console.log(numbers);
 */

// Criando novo array multiplicando número pelo seguinte e último por 2
for(let i=0; i < numbers.length; i+=1){
    if(numbers[i] == numbers[numbers.length-1]){
        newArray.push(numbers[i]*2);
    }else{
        newArray.push(numbers[i]* numbers[i+1]);
    }
    
}
console.log(newArray);
