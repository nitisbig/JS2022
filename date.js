const currentTime = () => {
    const date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    min=checkTime(min);
    sec=checkTime(sec);

    console.log(`${hr}:${min}:${sec}`);
    setTimeout(currentTime, 1000);
}
function checkTime(i){
    if(i<10){
        i = '0'+i;
    }
    return i;
}
currentTime();