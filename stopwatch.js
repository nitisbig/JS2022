
let [h,m,s,ms] = [0,0,0,0];

function timer(){
    
    ms++;
    console.log(`${h}:${m}:${s}:${ms}`);
    if(ms==100){
        s++;
        ms=0;
        if(s==60){
            m++;
            s=0;
            if(m==60){
                h++;
                m=0;
            }
        }
    }
}
setInterval(timer, 1);