class Client {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class Item {
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error ('Value invalid');
        this._price = value;
    }
}

class Order {
    private _clientName: Client;
    private _items: Item[] = [];
    private _payment: string;
    private _percentual = 0;

    constructor (
        client: Client,
        items: Item[],
        payment: string,
        percentual: number,
    ) {
        this._clientName = client;
        this._items = items;
        this._payment = payment;
        this._percentual = percentual;
    }

    get client(): Client {
        return this._clientName;
    }

    set client(value: Client) {
        this._clientName = value;
    }

    get items(): Item[] {
        return this._items;
    }

    set items(value: Item[]) {
        if (value.length === 0) throw new Error('Item invalid')
        this._items = value;
    }

    get payment(): string {
        return this._payment;
    }

    set payment(value: string) {
        this._payment = value;
    }

    get percentual(): number {
        return this._percentual;
    }

    set percentual(value: number) {
        if (value < 0) throw new Error('Discount invalid');
        this._percentual = value;
    }

    total(): number {
        const allItems = this.items.reduce((previousValue, item) => {
           const total = previousValue + item.price;
           return total;
        }, 0);

        return allItems;
    }

    totalWithDiscount(): number {
        return this.total() * (1 - this._percentual);
    }
}

