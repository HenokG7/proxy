var socks = require('socksv5');
;
var net = require('net');

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log('Your IP address is: ' + data.ip);
       
            
    });
 var server =  socks.createServer((info, accept, deny) => {
            accept();
          });
        
        
        server.listen(1080, 'localhost', function() {
          console.log('SOCKS server listening on port 1080');
        });
        server.useAuth(socks.auth.UserPassword(function(user, password, cb) {
            cb(user === 'nodejs' && password === 'rules');}));



