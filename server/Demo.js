let user = require('./user');
console.log(`userName:${user.userName}`)
console.log(`I'm ${user.userName}, I say ${user.sayHello()}`)
// 创建一个httpServer
let http = require('http');
let url = require('url');
let util = require('util');
let sever = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.end("Hello,Node.js");
}).listen(3000, '127.0.0.1', () => {
    console.log("服务器已经运行，请打开浏览器127.0.0.1:3000")
})