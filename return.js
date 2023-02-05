const data = (num1, num2)=>{
    return num1+num2;
}

const greet =(pName, callback)=>{
    setTimeout(()=>{
        console.log('data is recevied');
        callback({userName:pName});
    }, 3000);
}

const apple = data(45,56);
console.log(apple);

greet('hari', (data)=>{
    console.log(data.userName);
})