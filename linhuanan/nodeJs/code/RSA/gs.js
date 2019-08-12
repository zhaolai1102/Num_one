const fs = require('fs'),
    crypto = require('crypto');

//从文件加载key:
function loadKey(file) {
    //key实际上就是PEM编码的字符串
    var rf = fs.readFileSync(file, 'utf8');
    return rf;
}

let
    prvKey = loadKey('./rsa-prv.pem'),
    pubKey = loadKey('./rsa-pub.pem'),
    message = 'Hello, world!';

//使用私钥加密：
let enc_by_prv = crypto.privateEncrypt(prvKey, Buffer.from(message, 'utf8'));
console.log('encrypted by private key: ' + enc_by_prv);
//公钥解密:
let dec_by_pub = crypto.publicDecrypt(pubKey, enc_by_prv);
console.log('\ndecrypted by public key: ' + dec_by_pub.toString('utf8'));

//使用公钥加密:
enc_by_pub = crypto.publicEncrypt(pubKey, Buffer.from(message, 'utf8'));
console.log(enc_by_pub);
//私钥解密:
dec_by_prv = crypto.privateDecrypt(prvKey, enc_by_pub);
console.log('\n decrypted by private key: ' + dec_by_prv.toString('utf8'));