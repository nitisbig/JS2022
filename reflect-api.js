class Person{
    constructor(firstName,lastName){
        this.firstName =firstName;
        this.lastName =lastName;
    }
    getFull(){
        return `${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person('Nitesh','Ghimire');
console.log(p1.getFull())


//Reflect.construct
let args = ['Lionel','Messi'];
let messi = Reflect.construct(
    Person,
    args
)

console.log(messi instanceof Person)
console.log(messi.getFull())

//Reflect.apply()
let result = Function.prototype.apply.call(Math.max, Math, [12,45,78]);
console.log(result);
let res = Reflect.apply(Math.max, Math, [45,89,35]);
console.log(res)