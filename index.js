const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;


const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('home.html',function(error, data){
        if(error){
            res.writeHead(404);
            res.write('Error');
        } else {
            res.write(data);
        }
        res.end();
    })
});

server.listen(PORT, function(error){
    if(error){
        console.log('Something went wrong ', error);
    }
    else{
        console.log(`Server running on port ${PORT}`);
    }
});



// const url = require('url');

// const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// console.log(myUrl.href);
// console.log(myUrl.toString());
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);
// myUrl.searchParams.append('abc', '123');
// console.log(myUrl.searchParams);
// myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));fs/