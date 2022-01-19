const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

console.log('----------------------------------------------------------');

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

console.log('----------------------------------------------------------');

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name);
}

console.log(hasName(names, 'Ana'))

console.log('----------------------------------------------------------');

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((currentAge) => currentAge >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));