 const reducer = (state,action)=> {
    switch(action.type){
        case "INCREMENT":
            return state+1
        case "DECREMENT":
            return state-1
        default:
            return state
    }
 }

let obj = {
    type: "DECREMENT"
}
let result = reducer(4,obj)
console.log(result)
console.log(reducer(1,{type: "INCREMENT"}))