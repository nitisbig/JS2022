//noob code
function abs(num){
    if(num < 0){
        return Math.abs(num);
    }else{
        return num;
    }
}

//advanved code
function numToAccString(num){
    if(num != null){
        if(num < 0){
            return `(${Math.abs(num)})`
        } else{
            return num.toString();
        }
    }
}

//pro code
function numberToAccountingString(number){
    if(number == null) return
    if(number < 0) return `(${Math.abs(number)})`
    return number.toString()
}

console.log(numberToAccountingString(-89));
console.log(numberToAccountingString(89));
console.log(numberToAccountingString(undefined));