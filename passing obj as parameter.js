function fun({name , age}){
    return `${name} and ${age}`;
}

const obj = {
    name: 'Nitesh',
    age:45
}

console.log(fun(obj))