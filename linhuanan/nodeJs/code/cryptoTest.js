const crypto = require('crypto');

const hash = crypto.createHash('md5');

//可任意多次调用update();
// hash.update(Buffer.from("hello", 'utf-8'));
hash.update('hello, world');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));

//Hmac
const hmac = crypto.createHmac('sha256', 'aabbcc');

hmac.update('123456');
hmac.update('7890');

console.log(hmac.digest('hex'));

function cryptoEncrypt(data, key, enKey, iv) {
    const cipher = crypto.createCipheriv(enKey, key, iv);
    var text = cipher.update(data, 'utf8', 'hex');
    text += cipher.final('hex');
    return text;
}

function cryptoDecrypt(data, key, enKey, iv) {
    const decipher = crypto.createDecipheriv(enKey, key, iv);
    var text = decipher.update(data, 'hex', 'utf8');
    text += decipher.final('utf8');
    return text;
}

var data = "你知道我在等你妈？";
var key = "aaaaaaaaaaaaaaaaaaaaaaaa";
var iv = 'aaaaaaaaaaaaaaaa';
var encipherText = cryptoEncrypt(data, key, 'aes-192-cfb', iv);
var decipherText = cryptoDecrypt(encipherText, key, 'aes-192-cfb', iv);
console.log(data);
console.log(encipherText);
console.log(decipherText);