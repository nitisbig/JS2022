function call1(value,callback){
    setTimeout(()=>{
        value++;
        callback(value)
    },1000)
}
function call2(value,callback){
    setTimeout(()=>{
        value++;
        callback(value)
    },1000)
}
function call3(value,callback){
    setTimeout(()=>{
        value++;
        callback(value)
    },1000)
}

function main(){
    call1(0,e1=>{
        call2(e1,e2=>{
            call3(e2,e3=>{
                console.log(e1+e2+e3)
            })
        })
    })
}
main();