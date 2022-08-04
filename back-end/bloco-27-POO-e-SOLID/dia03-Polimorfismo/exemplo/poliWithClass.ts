abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character {
    talk() {
        console.log('estou falando inglês');
    }
    specialMove(): void {
        console.log('atacando com espada');
    }
}

class LongRangeCharacter extends Character {
    talk(): void {
        console.log('estou falando português');
    }
    specialMove(): void {
        console.log('atacando com arco e flecha');
    }
}

const doSomething = (char: Character) => {
    char.talk();
    char.specialMove();
}

const p1 = new MeleeCharacter();
const p2 = new LongRangeCharacter();

doSomething(p1);
doSomething(p2);
