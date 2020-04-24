class Person {
    constructor(name = 'John Doe', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Happy Birthday ${this.name}. Today you are ${this.age} year(s) old.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Your major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        if (this.homeLocation) {
            return `Hi I am ${this.name}. I'm visiting from ${this.homeLocation}`
        }
        else {
            return `Hi I am ${this.name}`
        }
    }
}

const me = new Traveller('Siddharth', 21, 'India');
console.log(me.getGreeting());
const other = new Traveller();
console.log(other.getGreeting());
