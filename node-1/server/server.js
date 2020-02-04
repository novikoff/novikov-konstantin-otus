const http = require('http');
var url = require('url');
const port = 3000;
const requestHandler = (request, response) => {
    var url_parts = url.parse(request.url, true);
    var req_number = url_parts.query.req_number;
    setTimeout(() => {
        response.end('response number ' + req_number);
    }, 100);
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)


})