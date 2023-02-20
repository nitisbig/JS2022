let arr= [4,6,9,7,3,1]
let remove= 2

for(let i=remove; i<arr.length-1; i++){
    arr[i] = arr[i+1]
    arr.length =arr.length-1
}
console.log(arr)