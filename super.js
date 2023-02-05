class foo{
    
    print(){
        console.log('this is printer')
    }
}
class bar extends foo{
    constructor(){
        super(); //must call super before extend class
        this.print();
    }
}

let obj = new bar()