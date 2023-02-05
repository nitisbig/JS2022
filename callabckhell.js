function order(){
    setTimeout(()=>{
        console.log('first order completed');
        setTimeout(()=>{
            console.log('second order completed');
            setTimeout(() => {
                console.log('third order is completed');
                setTimeout(() => {
                    console.log('fourth order is completed')
                }, 1000);
            }, 3000);
        },4000)
    },5000)
}
order();