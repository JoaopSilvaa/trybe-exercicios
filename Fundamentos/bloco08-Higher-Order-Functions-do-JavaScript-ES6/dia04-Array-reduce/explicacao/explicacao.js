const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenWithFilter = () => numbers.filter((element) => element % 2 === 0).reduce((sum, element) => sum + element);

const sumEven = () => numbers.reduce((sum, element) => element % 2 === 0 ? sum + element : sum);

console.log(sumEvenWithFilter());
console.log(sumEven());