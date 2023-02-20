let arr = [4, 5, 6, 4];

function sum(arr) {
  sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum;
}

console.log(sum(arr))

//using reducer
const cal = arr.reduce((total,item)=>{return total+item},0);
console.log(cal)