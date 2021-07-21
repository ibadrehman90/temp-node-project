const http = require('http');

const server = http.createServer((req,res)=>{
    // to check which URL is being requested and show the response accordingly
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('About us page')
    }
    // incase user ask for a page we don't have. Set default like.

    res.end(`
    <h2>Oops!</h2>
    `)
  
})

server.listen(5000)