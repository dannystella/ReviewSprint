var db = require('./db');

var Goal = {};

Goal.AddNewGoal = function(goal, description) {
  return db('goals').insert({ goal: goal, description: description, complete: false})
    .then(function(goal) {
      console.log(goal);
    })
    .catch(function(err) {
      console.error(err)
    });

}
 
Goal.findById = function(id) {
  return db('goals').where({ id: id }).select('*')
    .then(function(goal) {
      return goal;
    })
    .catch(function(err) {
      console.error(err)
    });
}; 
Goal.updateById = function(id, complete) {
  return db('goals').where({ id: id }).update({complete: complete})
    .then(function(goal) {
      console.log(goal);
    })
    .catch(function(err) {
      console.error(err)
    });
}; 

Goal.findAllByUser = function(username) {
    return db('goals').select("*").where({usersid : "users.id"})
      .then(function(goal) {
      return goal;
    })
    .catch(function(err) {
      console.error(err)
    });
}


module.exports = Goal;
