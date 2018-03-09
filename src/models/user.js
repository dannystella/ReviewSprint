var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

User.findById = function(id) {
  return db('goals').where({ newuserid: id }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

User.AddNewUser = function(username, password) {
  return db('users').insert({ username: username, password: password })
    .then(function(user) {
      console.log(user);
    })
    .catch(function(err) {
      console.error(err)
    });

}

// TODO: ADD MORE MODEL FUNCTIONS HERE

module.exports = User;
