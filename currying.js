function sum(a,b,c){
    return a+b+c;
};

console.log(sum(3,4,6));

//transform sum(3,4,6) to sum(3)sum(4)sum(6)
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5))

const add3 = curriedSum(3);
const add9 = add3(9);
const add7=  add9(7);
console.log(add7)