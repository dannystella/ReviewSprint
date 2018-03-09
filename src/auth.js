var bcrypt = require('bcrypt');
var jwt = require('jwt-simple'); 



var AuthMethods = {};


AuthMethods.comparePassword = function(password, hash, cb) {
    bcrypt.compare(password, hash, function(err, isMatch) {
        if(err){
            console.log(err);
        } else {
            cb(isMatch);
        }
    })
}   

AuthMethods.hashPassword = function(password, cb) {
    bcrypt.hash(password, 10, function(err, hash) {
        cb(hash);
    })
}

AuthMethods.decode = function(token, secret,cb) {
    cb(jwt.decode(token, secret));
}

module.exports.AuthMethods = AuthMethods;