// Паттерн, который вместо реальных объектов создает объекты-заменители, которые перехватывают вызов к оригиналам и
// позволяют сделать что-то до или после обращения к оригиналу

interface Door {
    open(password?: string): void;
    close(): void;
}

class CarAccess implements Door {
    public open(): void {
        console.log("Open car door");
    }

    public close(): void {
        console.log("Close car door");
    }
}

class SecuritySystem implements Door {

    private password = 'test';

    constructor(private door: Door) {}

    public open(password: string): void {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied');
        }
    }

    public close(): void {
        this.door.close();
    }

    public authenticate(password: string): boolean {
        return password === this.password;
    }
}

const door = new SecuritySystem(new CarAccess());
door.open('wrong pass');
door.open('test');
