
//CONSTRUCTOR
function User(){
    this.name = 'Bob';
}
//OBJECT LITERAL
const user={
    name: 'Bob'
}
//An object literal is typically used to create a single object 
//whereas a constructor is useful for creating multiple objects:
const user1 = new User();
console.log(user1.name);

//Properties and methods can be added to a constructor using a prototype:
User.prototype.age = 25;
console.log(user1.age);