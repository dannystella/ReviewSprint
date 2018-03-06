var express = require('express');
var bodyParser = require('body-parser');
var Goals = require('./routes.js')

// console.log(Goals)
var app = express();
app.use('/goals', Goals)
// TODO: SET UP SERVER
app.use(bodyParser.json())
  // Add middleware
app.use(express.static('./client/react-client/dist/')); 
  // Add static file service
  // Add API routes

// Example route. See server-spec.js for the related test.
app.get('/zen', function(req, res) {
  res.send('There are no accidents. - Master Oogway')
})

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 8080...')
})

module.exports = app;
