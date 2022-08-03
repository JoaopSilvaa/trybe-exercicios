interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string
}

class MyClass implements MyInterface {
    constructor(public myNumber: number) {}
    myFunc(myParam: number): string {
        return `A soma é: ${this.myNumber + myParam}!`;
    }
}

const clas = new MyClass(3);

console.log(clas.myFunc(5));