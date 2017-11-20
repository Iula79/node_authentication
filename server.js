var express = require('express');
var app = express();
var port = process.env.PORT || 3030;


app.get('/', (req, res)=>res.send("Hello World!"))

app.listen(port, ()=> console.log('App listening on port 3030')) 