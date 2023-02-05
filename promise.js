console.log('start');

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('got it');
        resolve({user: 'nitesh'});
    },3000)
})

const err = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('got it');
        reject(new Error('Error occured'));
    },3000)
})

promise.then(user => {
    console.log(user);
})

err.then(user =>{
    console.log(user);
}).catch(err=>console.log(err.message));


console.log('end');