const input1 = {a:1,b:2,c:3,d:10,e:12};
const input2 = {a:2, e:12, f:6, d:10};

const output = {d:10, e:12};

console.log(Object.keys(input1))
console.log(Object.values(input1))
console.log(Object.entries(input1))

function commonEntries(inp1,inp2){
    let obj={};
    for(let i in inp1){
        if(inp1[i]==inp2[i]){
            obj[i]=inp1[i];
        }
    }
    return obj;
}

console.log(commonEntries(input1,input2))