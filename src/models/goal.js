var db = require('./db');

var Goal = {};

Goal.AddNewGoal = function(goal, description, newuserid) {
  console.log("inside add new goal", newuserid)
  return db('goals').insert({ goal: goal, description: description, complete: false, newuserid: newuserid})
    .then(function(goal) {
      console.log("not logging", goal);
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
    return db('goals').where({usersid: username.id}).select("*")
      .then(function(goal) {
      return goal;
    })
    .catch(function(err) {
      console.error(err)
    });
    // .where({usersid : "users.id"})
}


module.exports = Goal;
