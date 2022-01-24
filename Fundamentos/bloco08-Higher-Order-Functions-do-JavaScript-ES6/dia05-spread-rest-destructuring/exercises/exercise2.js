const sum = (...rest) => rest.reduce((acc, cur) => acc + cur);

console.log(sum(3,4,5,3));