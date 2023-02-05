const ages = [45,56,78,23,32,65,98,45];

const isOverSixteen = ages.every(checkAge);
function checkAge(age){
    return age > 16;
}

console.log(isOverSixteen)