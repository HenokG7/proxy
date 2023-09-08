var socks = require('socksv5');
;
var net = require('net');const os = require('os');

const networkInterfaces = os.networkInterfaces();
for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
        if (net.family === 'IPv4' && !net.internal) {
            console.log(`IP address of ${name}: ${net.address}`);
        }
    }
}

 var server =  socks.createServer((info, accept, deny) => {
            accept();
          });
        
        
        server.listen(1080, 'localhost', function() {

          console.log('SOCKS server listening on port 1080');
        });
        server.useAuth(socks.auth.UserPassword(function(user, password, cb) {
            cb(user === 'nodejs' && password === 'rules');}));



