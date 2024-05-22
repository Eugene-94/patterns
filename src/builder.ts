// Используется для создания объектов со сложными состояниями

class Car {
    public autopilot: boolean;
    public parktronic: boolean;
    public signaling: boolean;

    constructor() {
        this.autopilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    public addAutoPilot(autopilot: boolean): CarBuilder {
        this.car.autopilot = autopilot;
        return this;
    }

    public addParktronic(parktronic: boolean): CarBuilder {
        this.car.parktronic = parktronic;
        return this;
    }

    public addSignaling(signaling: boolean): CarBuilder {
        this.car.signaling = signaling;
        return this;
    }

    public build(): Car {
        return this.car;
    }
}

const car = new CarBuilder()
    .addAutoPilot(false)
    .addParktronic(true)
    .addSignaling(false)
    .build();
