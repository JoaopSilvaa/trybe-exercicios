import Person from './Person';
import Student from './Student';
import Employee from './Employee';
import Subject from './Subject';
import Teacher from './Teacher';

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
console.log(maria);
const invalidPersonName = new Person('An', new Date('2000/06/07'));
console.log(invalidPersonName);

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);

const testInterfaceEmployee: Employee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
  
    generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  
      return `FNC${randomStr}`;
    },
  };
  
  console.log(testInterfaceEmployee);

const math = new Subject('Matemática');
const hist = new Subject('História');
const fil = new Subject('Filosofia');

console.log(math, hist, fil);

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, hist);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, fil);

console.log(marta);
console.log(joao);
console.log(lucio);
