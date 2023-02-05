class foo{
    constructor(nm){
        this.name = nm;
    }
    getname(){
        console.log(this.name)
    }
    static Hello(){
        console.log('this is static method');
    }
}

let obj = new foo('Nitesh');
obj.getname()

foo.Hello();