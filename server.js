/*
*
*Simple directory server on 3006 can be proxied through 80
*
*/
var express = require('express');
var app = express();

app.use(express.static("./" ));

app.listen(process.env.PORT || 3006);