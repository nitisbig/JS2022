function printPrimes(max){
    for(let i=2; i<=max; i++){
        let isPrime=true;
        for(let j=2; j<i; j++){
            if(i%j===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

printPrimes(1000);