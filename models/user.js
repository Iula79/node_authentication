const db = require('mongoose');

const UserSchema = db.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    username:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    passwordConf:{
        type:String,
        required:true
    }
});

var User = db.model('User',UserSchema);
module.exports = User;
