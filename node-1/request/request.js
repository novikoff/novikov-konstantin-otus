const http = require('http');
const program = require('commander');

program
    .option('-t, --type [types]', 'type of request', /^(sync|async)$/i)
    .option('-c, --count [count]', 'requests count');

program.parse(process.argv);

console.log('type:', program.type);
console.log('count:', program.count);



task(program.type, program.count);



function task(type, count) {

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
        (async() => {
            for (i = 1; i <= count; i++) {
                await make_request(i);
            }

        })();
    }
    if (type == 'async') {
        for (i = 1; i <= count; i++) {
            make_request(i);
        }
    }
}