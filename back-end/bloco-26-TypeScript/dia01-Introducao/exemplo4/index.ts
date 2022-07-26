import * as Exercise from './exercises';

console.log(Exercise.greeter('João'));
console.log(Exercise.personAge('João', 25));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.retangle(5, 30)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}cm²`);

console.log(`Trapézio de base maior 75cm, base menor 50cm e altura 35cm: ${Exercise.trapeze(75, 50, 35)}cm²`);

console.log(`Circulo dee raio 12,5cm: ${Exercise.circle(12.5)}cm²`);
