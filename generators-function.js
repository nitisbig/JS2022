function* generateId(){
    let i=0;
    while(true){
        i++;
        yield i
    }
}

let sG = generateId();
console.log(sG.next().value)
console.log(sG.next().value)
console.log(sG.next().value)
console.log(sG.next().value)
console.log(sG.next().value)