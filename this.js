/* function pName(name){
    console.log(`My name is ${name}`);
};

pName('Nitesh') */

//Implicit Binding

const person ={
    name: 'Ram',
    sayName: function(){
        console.log(`My name is ${this.name}`)
    }
}
person.sayName();

//Explicit Binding
function sayName(){
    console.log(`My name is ${this.name}`)
}
sayName.call(person);

//New binding
function Person(name){
    this.name =  name;
}

const p1 = new Person('Batman');
const p2 = new Person('Harry Potter');

console.log(p1.name, p2.name)