// Базовый класс
export class Car {
    protected price: number;
    protected model: string;

    constructor() {
        this.price = 1000;
        this.model = 'Car';
    }

    public getPrice(): number {
        return this.price;
    }

    public getModel(): string {
        return this.model;
    }
}

// Конкретная реализация автомобиля
class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

// Декоратор, добавляющий в комплектацию автопилот
class Autopilot extends Car {
    constructor(private car: Car) { super() }

    public getPrice(): number {
        return this.car.getPrice() + 5000;
    }

    public getModel(): string {
        return `${ this.car.getModel() } with autopilot`;
    }
}

// Декоратор, добавляющий в комплектацию парктроник
class Parktronc extends Car {
    constructor(private car: Car) { super() }

    public getPrice(): number {
        return this.car.getPrice() + 3000;
    }

    public getModel(): string {
        return `${ this.car.getModel() } with parktronic`;
    }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronc(tesla);
