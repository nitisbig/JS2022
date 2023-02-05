function getKey(k){
    return `${k}`
}
const country = 'Nepal';
let obj = {
    id: 5,
    name: 'kathmandu',
    country,
    [getKey('enabled')]: true,
}

console.log(obj.enabled)
console.log([getKey('nitesh')])
console.log(obj)