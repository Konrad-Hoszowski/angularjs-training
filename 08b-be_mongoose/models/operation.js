var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/budget');

var operationSchema = mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    deadline: {
        type: Date
    },
    description: {
        type: String
    },
    paid: {
        type: String
    },
    paidDate: {
        type: Date
    },
    operationType: {
        type: String
    }
});



var Operation = mongoose.model('Operation', operationSchema);
exports.Operation = Operation;

// curl -i -X POST -H "Content-Type: application/json" -d '{"name":"aaa","surname":"bbb","age":"123"}' http://localhost:3000/users
// curl localhost:3000/users/54cc01771239a86c660707d7
// curl localhost:3000/users