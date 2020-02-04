const http = require('http');


let args = process.argv.slice(2);
let type = args[0];
let count = args[1];

var make_request = (req_number) => {
    return new Promise(function(resolve_req, reject_req) {
        http.get('http://localhost:3000/?req_number=' + req_number, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                console.log(data);
                resolve_req();
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject_req();
        });
    });
}

if (type == 'sync') {
    (() => {
        return new Promise(function(resolve, reject) {
            (async() => {
                for (i = 1; i <= count; i++) {
                    await make_request(i);
                }
                resolve();
            })();

        });
    })();
}
if (type == 'async') {
    for (i = 1; i <= count; i++) {
        make_request(i);
    }
}