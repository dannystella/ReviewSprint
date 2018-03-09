var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var bodyParser = require('body-parser');

var AuthMethods = require('./auth.js').AuthMethods;
var User = require('./models/user.js');
var Goal = require('./models/goal.js');




const secret = 'fe1a1915a379f3be5394b64d14794932';

// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.
router.use(bodyParser.json())

router.get('/', function(req, res){
  AuthMethods.decode(req.url.slice(8, req.url.length), secret, function(data){
    User.findById(data.userId)
    .then(function(data){
      res.send(data);
    })
  });
  // User.findByUserName()
  // Goal.findAllByUser().then(function(data){
  //   res.send(data);
  // })
})

router.post('/', function(req, res){
  var newUserId;
  var token = req.body.token;
  
  AuthMethods.decode(token, secret, function(data){
    User.findById(data.userId).then(function(data1){
      newUserId = data.userId;
      Goal.AddNewGoal(req.body.goal, req.body.description, newUserId).then(function(data){
                res.end()
      })
    })
  })
})

router.get('/:id', function(req, res){
  console.log(req.params)
  var id = req.params.id;
  Goal.addCount(id);
  Goal.findById(id).then(function(data){
    res.send(data);
  })
})


router.post('/update', function(req, res){
  Goal.updateById(req.body.id, req.body.complete).then(function(data){
            res.end()
  })
})




router.post('/signup', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findByUsername(username)
  .then(function(data){
    if(data.length > 0){
      res.sendStatus(409)
    } else {
      AuthMethods.hashPassword(password, function(hash){
        User.AddNewUser(username, hash); 
        res.sendStatus(201)
      })
    }
  })
  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.findByUsername(username)
  .then(function(data){
    if(data.length === 0){
      res.sendStatus(401);
    } else {
      AuthMethods.comparePassword(password, data[0].password, function(isMatch){
        if(isMatch === true){
          var payload = {"userId": data[0].id}
          var token = jwt.encode(payload, secret);
          // console.log(token)
          res.send(token);          
        } else {
          res.sendStatus(401);
        }
      })

    }
  });
  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;
