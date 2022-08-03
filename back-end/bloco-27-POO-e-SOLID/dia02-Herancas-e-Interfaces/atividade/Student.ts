import Person from "./Person";

export default class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];

    constructor(
        name: string,
        birthDate: Date,
    ){
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._worksGrades = [];
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

        this._enrollment = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4 ) throw new Error('Student have more 4 exams');
        this._examsGrades = value;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    set worksGrades(value: number[]) {
        if (value.length > 2 ) throw new Error('Student have more 2 works');
        this._worksGrades = value;
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
    }
    
    sum(notas: number[]): number {
        const sumAll = notas.reduce((total: number, nota: number): number => total + nota);
        return sumAll;
    }

    average(notas: number[]): number {
        const sumAll = this.sum(notas);
        const averageAll = sumAll / notas.length;
        return averageAll;
    }
}