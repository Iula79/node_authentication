const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const db = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session')


app.get('/', (req, res)=>res.send("Hello World!"))

app.listen(port, ()=> console.log('App listening on port 3030')) 

db.createConnection("mongodb://localhost/authentication",{
    useMongoClient:true,
})