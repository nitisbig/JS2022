let x;
function callme(callback){
    setTimeout(()=>{
        x=4;
        callback({x})
    },2000)
}
function disp(){
    console.log(x);
}
callme(disp);