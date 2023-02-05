function greet(name, callBack){
    setTimeout(()=>{
        console.log(`Welcome${name}`);
    },3000)
    callBack();
}

function goodBYe(){
    console.log('Goodbye');
}

greet('Nitesh',goodBYe);