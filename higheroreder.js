function sing(callback){
    console.log(callback())
}

function cat(){
    return 'meow moew'
}
sing(cat)


function dog(vocal,callback){
    let dogSong = vocal+vocal+vocal
    callback(dogSong)
}

dog('barked',(sing)=>{console.log(sing)})


function first(second){
    console.log(second())
}
first(function(){
    return 'this will be higher oreder function'
})