let arr = ['frist','second','third','fourth','fifht','sixth']
//remove third
let index = 5 //let delete third item
/* arr[index] = arr[index+1]
arr[index+1] = arr[index+2]
arr[index+2] =arr[index+3]
arr[index+3] = null */
for(let i=index-1; i<arr.length; i++){
    arr[i] = arr[i+1]
    console.log(arr[i])
    
}
arr.pop()


console.log(arr)