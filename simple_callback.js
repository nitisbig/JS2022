function sing(callback){
    console.log('la la la')
    callback()
}
function cat(){
    console.log('mewo moew moew')
}
sing(cat)