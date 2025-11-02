const http = require('http');

// function dataControl(req, resp) {
//     resp.write("<h1>hello this is mukti patel2 </h1>");
//     resp.end();
// }

// http.createServer(dataControl).listen(5500);


http.createServer((req,resp)=>{
    resp.write("hello this is mukti patel");
        resp.end();
}).listen(5500);
  
// const http = require('http');

// http.createServer((req, resp) => {
//     resp.write("hello this is mukti patel");
//     resp.end();
// }).listen(5500);