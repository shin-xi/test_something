class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

class Animal {
    constructor(name = '动物', species = '物种') {
        this.name = name;
        this.species = species;
    }

    sayHello() {
        console.log('hello', this.name, this.species)
    }
}

class Sheep extends Animal {
    constructor(name = '羊', species = '哺乳类', color = '白色') {
        super(name, species);
        this.color = color;
    }

    sayHello() {
        console.log('咩!' + this.color);
        super.sayHello();
    }
}
