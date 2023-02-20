let arr = [2,4,6,9,10,13,45,55,62,68,79,82]

let find = 62
let postion = undefined
let min = 0
let max = arr.length-1

while(min<=max){
    let mid = Math.floor(((min+max))/2)
    if (arr[mid] === find){
        postion = mid
        break
    }
    else if(arr[mid] > find){
        max=mid-1
    }else{
        min = mid+1
    }
}
console.log(postion)