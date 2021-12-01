// Iniciando objetos e manipulando suas propriedades
let player = {
    name: 'Marta',
    latName: 'Silva',
    age: 34,
    medals:{
        golden:2,
        silver:3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.latName + ' tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player.name + ' ' + player.latName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');


console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// Utilizando for/in
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let hello in names){
    console.log('Olá ' + names[hello]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let index in car){
    console.log(index, car[index]);
}

//Funções
function adicao(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function mod(a,b){
    return a%b;
}

console.log(adicao(3,4));
console.log(sub(8,4));
console.log(multi(3,2));
console.log(div(12,4));
console.log(mod(6,2));


