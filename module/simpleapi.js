const http = require('http');
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('Hello')
    }
}).listen(4000)