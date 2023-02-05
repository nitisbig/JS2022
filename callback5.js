function doStep1(init, callback){
    const res = init+1;
    callback(res)
}

function doStep2(init,callback){
    const res = init+1;
    callback(res);
}
function doStep3(init,callback){
    const res = init+1;
    callback(res)
}

function doOperation(){
    doStep1(0,(res1)=>{
        doStep2(res1, (res2)=>{
            doStep3(res2, (res3)=>{
                console.log(res3)
            })
        })
    })

}
doOperation();