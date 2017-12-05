const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const db = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
var users = require('./routes/user')
var routes = require('./routes/index')

db.connect("mongodb://localhost/authentication",{
    useMongoClient:true,
});

db.connection.on('connected', function(){
    console.log("connected to database successfully");
})

app.use(bodyParser.json())
app.use('/', routes);
app.use('/api/users', users);
app.listen(port, ()=> console.log('App listening on port 3030')) 



