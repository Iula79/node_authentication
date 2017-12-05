const db = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = db.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
});

UserSchema.pre("save", function(next){
    var self = this;
    bcrypt.hash(this.password, 10, function(err, hash) {
        if (err) {
            console.log("error happened");
            console.log(err);
        }
        self.password = hash;
        next();
    });
});

UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compare(password, this.password);
}

var User = db.model('User', UserSchema);
module.exports = User;
