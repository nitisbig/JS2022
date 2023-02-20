const fun = (product)=>{
    console.log(product.name)
    console.log(product.price)
    console.log(product.country)
}
let obj = {
    name: 'MoterBike',
    price: 450000,
    country: 'India'
}

fun(obj)


//another way
let fun = ({name,price,country})=>{
    console.log(name)
    console.log(price)
    console.log(country)
}

let obj ={
    name:'iPhone14',
    price: 450000,
    country: 'USA'
}
fun(obj)