function Employee(name,age,level){
    this.name = name;
    this.age = age;
    this.level = level;
}

Employee.prototype.detail = function(){
    return 'user details are shown here'
}
Array.prototype.print = function(arr){
    return arr
}

const e1 = new Employee('Nites',45,'btec')
const e2 = new Employee('Ram',78,'mtec')
console.log(e1.age)
console.log(e2.level)
console.log(e2.detail())

let arr = [];
console.log(arr.print('this is message'))
