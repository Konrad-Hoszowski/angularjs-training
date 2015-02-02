var port = 3030;

var server;
var express = require('express');
var app = express();
require('../../config/routes')(app);

module.exports = {
    setup: function () {

        server = app.listen(port);
        console.log('Listening on port ' + port + '...');

    },
    teardown: function () {
        server.close(function () {
            console.log('Stopped listening on port ' + port);
        });
    }
};
