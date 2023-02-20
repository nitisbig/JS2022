const myModule = function(){
    let privateVar = 'Hello'
    function privateMethod(){
        console.log(privateVar)
    }
    return {
        publicMethod: function(){
            privateMethod()
        }
    }
}()

myModule.publicMethod()