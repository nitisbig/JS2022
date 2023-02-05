let greet = 'hello';
function func(call) {
    call(
        {
            greet
        }
    )
}

function disp() {
    console.log(greet);
}
func(disp);
