var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const initServer = require('./src/init');
initServer(app);
app.listen(6048, () => {
    console.log('The server is running');
})