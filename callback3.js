function greet(name, callBack){
    setTimeout(()=>{
        console.log(`Welcome, ${name}`)
        setTimeout(()=>{
            callBack({nm: name})
        },1000)
    },3000)
    ;
}

greet('nitesh', (user)=>{
    console.log(`goodbye${user.nm}`)
});

