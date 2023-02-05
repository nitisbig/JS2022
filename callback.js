function myFirst(){
    console.log('Hello');
}
function mySecond(){
    console.log('World');
}

myFirst();
mySecond();

function pName(name){
    return name;
}
function greet(personName,message, callBack){
    console.log(`${message} ${callBack(personName)}`);
}
greet('Nitesh', 'HI, ', pName);