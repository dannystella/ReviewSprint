var bcrypt = require('bcrypt'),
q = require('q');


var AuthMethods = {};


AuthMethods.comparePassword = function(password, hash, cb){
    bcrypt.compare(password, hash, function(err, isMatch){
        if(err){
            console.log(err);
        } else {
            cb(isMatch);
        }
    })
}   

AuthMethods.hashPassword = function(password, cb){
    bcrypt.hash(password, 10, function(err, hash){
        cb(hash);
    })
}

module.exports.AuthMethods = AuthMethods;