class a{
    constructor(message){
        this.message = message;
    }
    mult(a,b){
        return a*b
    }
   
}

class b extends a{
    sq(n){
        let res = this.mult(n,n);
        return res
    }
}

const obj = new a('Hello i am learning javascript class');
console.log(obj.message)

const obj1 = new b();
console.log(obj1.sq(5))
console.log(obj1.sq(4))
