let data = new Map([
    ['name','Nitesh'],
    ['age',45],
    [2,'this is id of mine'],
    [true,'yes i am true']
])

data.set('country','nepal')

console.log(data.get(true))
console.log(data.get('name'))
console.log(data.get(2))
console.log(data.get('country'))
console.log(data.keys( ))