var crypto = require('crypto');
//md5加密
var hash = crypto.createHash('md5');
hash.update("你知道我在等你吗？123456");
console.log(hash.digest('hex'));
//baf92e29c748b005da59d9a6a9c7e739

//hmac密钥加密
var hmac = crypto.createHmac('sha256', '123456');
hmac.update('你知道我在等你妈？');
hmac.update('不知道？');
console.log(hmac.digest('hex'));

//aes对称加密
function encrypt(data, enKey, key, iv) {
    var enCipheriv = crypto.createCipheriv(enKey, key, iv);
    var cipherivText = enCipheriv.update(data, 'utf8', 'hex');
    cipherivText += enCipheriv.final('hex');
    return cipherivText;
}

function decrypt(data, enKey, key, iv) {
    var deCipheriv = crypto.createDecipheriv(enKey, key, iv);
    var source = deCipheriv.update(data, 'hex', 'utf8');
    source += deCipheriv.final('utf8');
    return source;
}
console.log('0-0-0-0-0-0-0-0-0-0-0-0-0--0-0-0-0-0-0-0');
console.log();
var data = "你知道我在等你妈？";
var enKey = "aes-192-cfb";
var key = "Diskd93jdu8DisuendoUdye8";
var iv = "aaaaaaaaaaaaaaaa";
var encryptData = encrypt(data, enKey, key, iv);
var decryptData = decrypt(encryptData, enKey, key, iv);
console.log(data);
console.log(encryptData);
console.log(decryptData);

console.log('-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=--=-=-');

//xiaoming's keys;
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

//xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

console.log(hong_keys);
console.log(ming_keys);

//exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

//print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));