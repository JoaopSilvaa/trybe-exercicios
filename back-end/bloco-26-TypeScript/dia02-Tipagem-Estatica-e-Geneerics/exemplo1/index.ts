// types aliases
type Bird = {
    head: string;
    body: string;
    feathres: string;
    wings: string;
};

type Sum = (x: number, y: number) => number;

type Address = {
    city: string;
    state: string;
    number: number;
    district: string;
};

// type unions

type states = 'liquid' | 'solid' | 'gaseous'

type RG = number | string;

type so = 'linux' | 'mac' | 'windows';

type vogals = 'a' | 'e' | 'i' | 'o' | 'u';

// classes

class Dog {
    _name: string;
    _breed: string;
    _height?: number;

    constructor(name: string, breed: string, height?: number) {
        this._name = name;
        this._breed = breed;
        this._height = height;
    };

    bark(): void {
        console.log(`${this._name} is barking`);
    };
};

class House {
    owner: string;
    address: string;
    color: string;
    area: number;
    
    constructor(owner: string, address: string, color: string, area: number) {
        this.owner = owner;
        this.address = address;
        this.color = color;
        this.area = area;
    }
};


class Flight {
    origin: string;
    destination: string;
    departureDate: Date;
    arrivalDate: Date;
    passengers: number;

    constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
        this.origin = origin;
        this.destination = destination;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.passengers = passengers;
    }
};

// Interface

interface Automovel {
    name: string;
    brand: string;
    doors: number;
    color: string;
    gears: string;
    turnOn: () => void;
    turnOff: () => void;
};

interface Feline {
    name: string;
    walk: () => void;
    hunt: () => void;
};

interface Aircraft {
    brand: string;
    wings: number;
    model: string;
    isManned: boolean;
    speedUp: () => void;
    speedDown: () => void;
};

