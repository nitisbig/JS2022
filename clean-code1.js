let myItem = {
    tv: 45000,
    mobile: 78000,
    desktop: 90000,
    pc: 140000,
    printer: 12000
}

/* function cart(item){
    if(item == null){
        return false;
    }
    else if(item=='tv'){
        return 45000
    }
    else if(item=='mobile'){
        return 78000
    }
    else if(item=='desktop'){
        return 90000
    }
    else if(item=='pc'){
        return 140000
    }
    else if(item=='printer'){
        return 12000
    }
    else{
        return "There is no such item"
    }
} */

function cart(item){
    if(item == null){
        return 'item shouldnt be null'
    }
    else{
        if(!myItem[item]){
            return 'this item does not exist'
        }else{
            return myItem[item];
        }
    }
}


//console.log(cart('printer'))
console.log(cart('tv'))