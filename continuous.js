var express = require('express')
var basicAuth = require('http-auth')

var app = express()
var authMiddleware = basicAuth.connect(basic)
var basic = basicAuth.basic({
    realm: 'Admin Stuff'
}, function(username, password, callback) {
    callback(username == 'admin' && password == 'password');
})

app.get('/deploy',authMiddleware,function(req,res){
    res.json({status:"deploying"})
})

app.listen(3009)