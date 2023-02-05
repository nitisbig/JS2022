let a = [];
let b = [];

console.log(a.length==b.length);
console.log(a===b); //cause it shares memroy location instead of its values
console.log(a);

let z = [2,6,4,5,8,9,7];
console.log(...z);

console.log(10 - - 10);

let set = new Set([1,5,3,6,4,1,1]);
console.log(set);

let person = {name:'Jhonny'};
console.log(delete person.name)
console.log(person)

let pName = ['peter','harry','shamyy','gatty'];
let [nm1,nm2] = pName;
console.log(nm1,nm2);


const pDetails = {name:'Messi',age:45};
const {name} = pDetails;
console.log(name);

//merge two object
let obj1 = {name:'Ronaldo',age:45};
let obj2 = {skill:'92',country:'Nepal'};
obj1 = {...obj1,...obj2};
console.log(obj1);

let data = {name:'Nitesh',age:45,skill: ['Programming','Math','Cycling']};
let info = {country:'Nepal', city:'Biratnagar'};
data={data, ...info}

console.log(data);


const q0 = false || {} || null;
console.log(q0);

const q1 = null || false || 'd';
console.log(q1);

console.log(Promise.resolve(5))

console.log((x=>x)('i love programming'));

function sumValue(x,y,z){
    return x+y+z;
}
let num = [5,7,8];
console.log(sumValue(...num))

let q2 = 'code is necessary to survive';
console.log(!typeof q2 === 'object');
console.log(!(typeof q2 === 'object'));
console.log(!typeof q2 === 'string');

let q3 = {name:'Nitesh'};
Object.seal(q3)
q3.age = 45 //not working beacause object is sealed
console.log(q3)

let q4 = 'this is checking bollean';
console.log(!q4)
console.log(!!q4)

let q5 = ['nitesh','john','peter'];
delete q5[1];
console.log(q5);

console.log(3**3);

//
let q6 = 2;
setTimeout(()=>{console.log(q6)},0);
q6 = 100;
//

//
function q7(){
    console.log(a);
    console.log(b);
    var a;
    let b;
}
//q7();
//

for(var i=0; i<3; i++){
    setTimeout(()=>{console.log(i)},10)
}
