const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); 
  console.log(person);
  
  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); 
console.log(person); 
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); 
console.log(person); 