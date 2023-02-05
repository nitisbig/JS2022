//object deconstruct
let obj ={
    name: 'nitesh',
    age: 45,
    subject: ['Nepali','English','Science','Social']
}

let {name,age,subject} = obj;
console.log(name);
console.log(age);
console.log(subject);

//array deconstruct
let arr = [2,4,5,6];
let [a,b,x,d] = arr;
console.log(a);
console.log(b);