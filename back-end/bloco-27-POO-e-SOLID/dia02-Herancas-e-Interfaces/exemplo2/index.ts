class SuperClass {
    public isSuper: boolean
    constructor() {
        this.isSuper = true;
    }
    public sayHello(): void {
        console.log('Olá mundo!');
    }
}


class SubClass extends SuperClass {
    constructor() {
        super()
        this.isSuper = false;
    }
}

const myFunc = (object: SuperClass) => {
    if (object.isSuper === true) {
        console.log('Super');
    }
    console.log('Sub');
    return object.sayHello();
}

const supc = new SuperClass();
const subc = new SubClass();

myFunc(supc);
myFunc(subc);
