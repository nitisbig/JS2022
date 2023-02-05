//find second largest number
const arr = [2,6,7,4,6,9,8,5];

function secondLarge(inp){
    let a = [...new Set(inp)].sort((a,b)=>a-b);
    return a[a.length-2];
}

console.log(secondLarge(arr))