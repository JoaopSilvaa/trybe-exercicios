enum Colors {
    black = 'preta',
    white = 'branca',
    red = 'vermelha',
    silver = 'prata',
};

enum Directions {
    left = 'esqueda',
    right = 'direita',
};

enum Doors {
    driver = 'da pessoa motorista',
    ride = 'da pessoa carona',
    behind_driver = 'de trás da pessoa motorista',
    behind_ride = 'de trás da pessoa carona',
};

interface Car {
    brand: string,
    color: Colors,
    doors: number,
};

class Car {
    constructor(brand: string, color: Colors, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk():void  {
        console.log('Bi bi');
    };

    openTheDoor(door: Doors): void {
        console.log(`The door ${door} is open`);
    };

    closeTheDoor(door: Doors): void {
        console.log(`The door ${door} is closed`);
    };

    turnOn(): void {
        console.log(`The car is turn on`);
    };

    turnOff(): void {
        console.log(`The car is turn off`);
    };

    speedUp(): void {
        console.log(`increasing speed`);
    };

    speedDown(): void {
        console.log(`decreasing speed`);
    };

    stop(): void {
        console.log(`Stopped the car`);
    };

    turn(direction: Directions): void {
        console.log(`Turning ${direction}`);
    };
};

const car1 = new Car('volkswagen gol', Colors.silver, 4);

car1.openTheDoor(Doors.driver);
car1.closeTheDoor(Doors.driver);
car1.turnOn();
car1.speedUp();
car1.speedDown();
car1.turn(Directions.left);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.right);
car1.turn(Directions.right);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.right);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(Doors.behind_ride);
car1.closeTheDoor(Doors.behind_ride);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.right);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.left);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.right);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(Doors.behind_ride);
car1.closeTheDoor(Doors.behind_ride);
car1.speedUp();

type Slices = 4 | 6 | 8;

interface Pizza {
    flavor: string,
    slices: Slices,
};

// const calabresa: Pizza = {
//     flavor: 'Calabresa',
//     slices: 8,
// };

// const marguerita: Pizza = {
//     flavor: 'Marguerita',
//     slices: 6,
// };

const nutela: Pizza = {
    flavor: 'Nutela',
    slices: 4,
};

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaCommon extends Pizza {
    flavor: Common
}

interface PizzaVegetarian extends Pizza {
    flavor: Vegetarian
}

interface PizzaSugar extends Pizza {
    flavor: Sugar,
    slices: 4
}

const calabresa: PizzaCommon = {
    flavor: "Calabresa",
    slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
    flavor: "Frango",
    slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
    flavor: "Pepperoni",
    slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
    flavor: "Marguerita",
    slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
    flavor: "Palmito",
    slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
    flavor: "Goiabada com Queijo",
    slices: 4
}

console.log(goiabadaEQueijo);

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
    const newArray: Array<T> = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
    return item !== "a"
}));