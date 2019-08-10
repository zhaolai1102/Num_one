var net = require("net");
var hostname = process.argv[2];
var port = process.argv[3];
var client = net.createConnection({host:hostname,port:port}, ()=>{
    console.log('connected server success');
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
        let chunk;
        // Use a loop to make sure we read all available data.
        while ((chunk = process.stdin.read()) !== null) {
            client.write(`data: ${chunk}`);
        }
    });
});
client.on('error', function(err) {
    console.log(err.message);
} );
client.on('data', function (data) {
    console.log(data.toString());
});

client.on('end', function() {
    console.log('disconnected from client');
});
