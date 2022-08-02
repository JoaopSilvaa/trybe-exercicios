class TV {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(brand: string, size: number, resolution: string, connections: string[]) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo(newValue: string | undefined) {
        if (!newValue || this._connections.includes(newValue)) {
            this._connectedTo = newValue;
            console.log(this.connectedTo);  
        }
        console.log('Sorry, connection unavailable');
    }

    turnOn():void {
        console.log(this._brand, this._size, this._resolution, this._connections);
    }

}


const tv1 = new TV('samsumg', 27, '1980x1240', ['HMDI', 'Ethernet', 'Wifi']);
tv1.connectedTo = 'Ethernet';
tv1.turnOn();