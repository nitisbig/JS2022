function doStep1(init, callback){
    setTimeout(()=>{
        const res = init+1;
        console.log(res)
        callback(res)
    },1000)
}
function doStep2(init, callback){
    setTimeout(()=>{
        const res = init+1;
        console.log(res)
        callback(res)
    },1000)
}
function doStep3(init, callback){
    setTimeout(()=>{
        const res = init+1;
        console.log(res)
        callback(res)
    },1000)
}

function doOperation(){
    doStep1(0,res1=>{
        doStep2(res1, res2=>{
            doStep3(res2, res3=>{
                setTimeout(()=>{
                    console.log(res3+res2+res1)
                },1000)
            })
        })
    })
}
doOperation();