interface Person {
    name: string;
    info: string;
}

class Student implements Person {
    constructor(
        public name: string,
        public school: string) {}
    
        get info() {
            return `${this.name} estuda no colégio ${this.school}`
        }
}

class Teacher implements Person {
    constructor(
        public name: string,
        public school: string,
        public subject: string) {}
    get info() {
        return `${this.name} leciona ${this.subject} no coléigo ${this.school}`
    }
}

function printInfo(person: Person) {
    console.log(person.info);
}

const student = new Student('João', 'Batista');
const teacher = new Teacher('Maria', 'Marista', 'Sociologia');

printInfo(student);
printInfo(teacher);

