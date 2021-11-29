let tasklist = ['Tomar café','Reunião', 'Brincar com o Cachorro'];

tasklist.push('Fazer exercício da Trybe'); //colocando tarefa no final
tasklist.unshift('Acordar'); //colocando tarefa no início

// console.log(tasklist);

tasklist.pop(); //tirando a ultima tarefa
tasklist.shift(); //tirando a primeira tarefa

// console.log(tasklist);
console.log(tasklist.indexOf('Reunião'));
