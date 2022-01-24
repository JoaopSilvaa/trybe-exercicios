const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

const multiply = (number, value = 1) => number * value;
  
  console.log(multiply(8));