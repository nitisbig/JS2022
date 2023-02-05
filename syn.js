const pName = 'Nitesh'
const greet = `Hello ${pName}`

console.log(greet)

const makeGreeting = (pName)=>{
    return `Hi! ${pName}`
}

const firstName = makeGreeting("Ram")
/* makeGreeting() is a synchronous function because the caller has to wait for the function to 
finish its work and return a value before the caller can continue. */
console.log(firstName)