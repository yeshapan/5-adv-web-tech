const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify({ name: 'mukti', email: 'mukti.sp@gmail.com' }));
    resp.end(); 
}).listen(5000, () => {
    console.log('Server is listening on port 5000');
});