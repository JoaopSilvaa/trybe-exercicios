const pontos = [40, 100, 1, 5, 25, 10];
pontos.sort((a, b) => a - b);
console.log(pontos); // [1, 5, 10, 25, 40, 100]

console.log('----------------------------------------------------------');

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

console.log('----------------------------------------------------------');

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const testeSortCrescente = people.sort((pessoaA , pessoaB) => pessoaA.age - pessoaB.age);

  const testeSortDecrescente = people.sort((pessoaA , pessoaB) => pessoaB.age - pessoaA.age);

