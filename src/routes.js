var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var bodyParser = require('body-parser');


var User = require('./models/user.js')
var Goal = require('./models/goal.js')
// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.
router.use(bodyParser.json())

router.get('/', function(req, res){
Goal.findAllByUser().then(function(data){
  res.send(data);
})
  console.log("hit")
})

router.post('/', function(req, res){
Goal.AddNewGoal(req.body.goal, req.body.description).then(function(data){
  console.log(data);
          res.end()
})
})

router.get('/:id', function(req, res){
  var id = req.params.id;
Goal.findById(id).then(function(data){
  res.send(data);
})
  console.log("hit")
})


router.post('/update', function(req, res){
  console.log(req.body)
Goal.updateById(req.body.id, req.body.complete).then(function(data){
  console.log(data);
          res.end()
})
})




router.post('/signup', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;
