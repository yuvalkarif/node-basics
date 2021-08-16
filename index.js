const http = require('http');
const fs = require('fs');
const port = 8080;
const indexPage = fs.readFile('./index.html',(err,data)=>{
    if(err){
        console.log(err);
    }
    return data;
})
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html';

    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
        }
        res.end(data);
    })
})

server.listen(port,'localhost',()=>{
    console.log(`Server running at http://localhost:${port}/`);
})