// const http = require('http');
// const server = http.createServer(function(req, res){

//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.write("[{'name':'user','age': 4,'gender': 'male'}]");
//     res.end()


    
// })
// server.listen(5000, function () {
//   console.log("Server running");
// });

// // const http = require('http');
// // const server = http.createServer(function (req, res) {
// // res.write("[{'name':'user','age': 4,'gender': 'male'}]");
// // res.end();
// // })
// // server.listen(5000,function(){
// // console.log("Server running") ;
// // })
// // has context menu



const http = require('http');
const cors = require('cors');
const server = http.createServer(function (req, res) {
    const data = [
        { username: 'naomi', age: 10 },
    { username: 'sefa', age: 14 },
    { username: 'eric', age: 11 }
]
    if (req.url == '/') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("welcome");
        res.end();
    } else if (req.url == '/users') {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200, { 'Content_Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Content_Type': 'text/html' });
        res.write("contact page");
        res.end();
    } else {
        res.writeHead(404, { 'Content_Type': 'text/html' });
        res.end();
    }
})
server.listen(5000, function () {
    console.log("Server running");
})