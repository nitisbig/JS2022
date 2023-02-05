let obj={
    name: "nitesh",
    country: 'Nepal',
    age: 45
}

let spreadObj={
    title: 'This is spread object',
    ...obj,
}
console.log(spreadObj)