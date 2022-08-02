class Student {
    private _enrollment: number;
    private _name: string;
    private _examsGrades: number[];
    private _worksGrades: number[];

    constructor(
        enrollment: number,
        name: string,
    ){
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._worksGrades = [];
    }

    get enrollment(): number {
        return this._enrollment;
    }

    set enrollment(value: number) {
        this._enrollment = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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

