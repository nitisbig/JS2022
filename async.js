function greet(){
    console.log('Congratulation you successfully passed JS Exam');
}

setTimeout(greet, 5000);

setTimeout(()=>{
    console.log("THis is show after 1 sec")
}, 1000);