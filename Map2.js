let data =  new Map([
    ['detail', {name: 'Nitesh',age:45,country:'Nepal'}],
    ['score', {dls: 1245, freefire: 365, pubg: 987}],
    ['activites', {morning: 'Start a shop', afternoon: 'learning to code', night:'develop web apps'}],
    ['projects',{web: {laravel:'admin panel', nodejs: 'rest api', django: 'i/o apps'}, game:{javascript: 'tic tac toe', cpp:'super mario'}, other:{dsa: 'learning some dsa'}}]

])

console.log(data.get('detail').name)
console.log(data.get('projects').web.laravel)
console.log(data.get('activites').night)

data.set('hobby',{programming: ['c','c++','javascript','pyhton'],framework: ['nodejs','reactjs','django'],other:['dsa','problem solving']})
console.log(data.get('score'))
console.log(data.get('hobby').programming)

let program= data.get('hobby').programming
program.map(item=>{
    console.log(item)
})

data.get('hobby').programming.map(item=>{console.log(item)})
