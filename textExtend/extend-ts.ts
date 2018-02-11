class Animal {

    constructor(private name: string) {

    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

class SuperSnake extends Snake {
    constructor(name: string, private type: string = 'super') {
        super(name);
    }

    move(distanceInMeters = 10) {
        console.log("Slithering...Slithering...");
        super.move(distanceInMeters);
    }
}