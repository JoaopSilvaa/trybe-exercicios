interface Logger {
    log(param: string): void;
}

class ConsoleLogger implements Logger {
    log(param: string): void {
        return console.log(param);
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
        return console.log(`Aqui é o consolelogger2 ${param}`);
    }
}

interface Database {
    logger: Logger;
    save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
    constructor(public logger: Logger = new ConsoleLogger()) {}
    save(key: string, value: string): void {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const ex1 = new ExampleDatabase(log1);
const ex2 = new ExampleDatabase(log2);
const ex3 = new ExampleDatabase();

ex1.save('brilha muito no curintias', 'ronaldo');
ex2.save('goxxxxta', 'ele');
ex3.save('desbanido', 'banido');
