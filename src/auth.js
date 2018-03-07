var bcrypt = require('bcrypt'),
q = require('q');


var AuthMethods = {};


AuthMethods.comparePassword = function(password, hash){
    bcrypt.compare(password, hash, function(err, isMatch){
        if(err){
            console.log(err);
        } else {
            return isMatch;
        }
    })
}   

AuthMethods.hashPassword = function(password){
    bcrypt.hash(password, 10, function(err, has){

    })
}

module.exports.AuthMethods = AuthMethods;