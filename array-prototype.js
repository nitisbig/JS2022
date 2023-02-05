let arr = [4,5,6];

Array.prototype.print = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i])
    }
}
let a = arr.print((element)=>{console.log(element*4)})
