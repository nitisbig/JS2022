function time(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
setInterval(time, 1000);