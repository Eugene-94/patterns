class Equipment {
    private price: number | undefined;
    private name: string | undefined;

    public getPrice(): number {
        return this.price || 0;
    }

    public getName(): string {
        return this.name || '';
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPrice(price: number): void {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(3000);
    }
}

class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(4000);
    }
}

class Composite extends Equipment {
    private equipments: Equipment[] = [];

    public add(equipment: Equipment): void {
        this.equipments.push(equipment);
    }

    public getPrice(): number {
        return this.equipments
            .map(eq => eq.getPrice())
            .reduce((summ, curr) => curr + summ, 0);
    }
}

export class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
}

const car = new Car();
car.add(new Engine());
car.add(new Tools());
car.add(new Body());

const price = car.getPrice();
