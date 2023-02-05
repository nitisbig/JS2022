class foo{
    get(){
        console.log('hey you are pretty')
    }
}
class bar extends foo{
    disp(){
        this.get();
    }
}
let obj = new bar;
obj.disp()