
//Classes and constructors
class Person {
    name;
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Welcome ${this.name} in our company `)
    }
}

const per1 = new Person('Nitesh')
per1.greet();

//Omitting constructors

class Animal {
    sleep() {
        console.log('zzzzz')
    }
}
const spot = new Animal();
spot.sleep();

//inheritance

class Player extends Person {
    constructor(name, rating) {
        super(name);
        this.rating = rating;
    }
    //function override
    greet() {
        console.log(`Welcome ${this.name} and your rating is ${this.rating}`)
    }


}

const plyr1 = new Player('Messi', '10/10');
plyr1.greet();

//Encapsulation

class Students extends Person {
    //Private data properties must be declared in the class declaration, and their names start with #.
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;

    }
    greet() {
        console.log(`Congratulation ${this.name} you are passed at ${this.#year}`);

    }

}

const std1 = new Students('Rewat', 2022);
std1.greet();

//Encapsulation Private Method
class Private{
    PublicMethod(){
        this.PrivateMethod();
    }
    PrivateMethod(){
        console.log('You can call me?..')
    }
}

const myExample = new Private;
myExample.PublicMethod();