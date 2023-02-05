function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName
}

const p1 = new Person('Lionel', 'Messi');
const p2 = new Person('Cristiano', 'Ronaldo');

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

console.log(p1.fullName());
console.log(p2.fullName());