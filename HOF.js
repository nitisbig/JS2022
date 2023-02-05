let a = 10;

Number.prototype.customFun = function(x){
    return x(this)
}

let res = a.customFun((x)=>x*100);
console.log(res)


/////
arr = [2,4,5,6,8,7,9,1];

Array.prototype.customMap = function(data){
    for(i=0; i<this.length; i++){
        console.log(data(data(this[i])))
    }
}

let res1 = arr.customMap((item)=>item*8);
console.log(res1)

