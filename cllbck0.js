function greet(pName, callback){
    console.log('Hello, ')
    setInterval(()=>{
        callback(pName);
    },3000)
};
greet('messi', (nm)=>{
    console.log(nm)
})
