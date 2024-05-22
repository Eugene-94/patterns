// Позволяет копировать объекты, не вдаваясь в подробности их реализации

class TeslaCar {
    constructor(
        public model: string,
        public price: number,
        public autopilot: boolean,
    ) {}

    public produce(): TeslaCar {
        return new TeslaCar(this.model, this.price, this.autopilot);
    }
}

const prototypeCar = new TeslaCar('S', 10000, true);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car3.model = 'M';
car3.price = 8000;
