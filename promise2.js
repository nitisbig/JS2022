const p = new Promise((resolve,reject)=>{
    let a = false;
    if(a){
        resolve('Sucess');
    }else{
        reject('failed');
    }
});

p.then(check => {
    console.log(check+':It is scucessfully received data from server');
}).catch(check =>{
    console.log(check);
})