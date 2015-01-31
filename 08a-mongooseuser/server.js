var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded());
    app.use(bodyParser.json({
        limit: 5.5e6
    }));
app.use(cors());

require('./routes/site')(app);

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
