function compose(f,g){
    return function(x){
        return f(g(x));
    }
}
function fun(){
    return function(a){
        return a*a;
    }
}

let f = fun();
console.log(f(4))

function callme(name,callback){
    let greet = `Hello, ${name}`;
    callback(greet)
}

let a = callme('Nitesh',(greet)=>{console.log(greet)})

function call0(value,callback){
    
    callback(value);
}
let b = call0(45, (val)=>console.log(val))


function call1(message,callback){
    let waitingTime = 3000;
    console.log(`wait for ${waitingTime}s`)
    setTimeout(()=>{callback(message)},waitingTime)
}
call1('This will be run in while',(val)=>console.log(val))