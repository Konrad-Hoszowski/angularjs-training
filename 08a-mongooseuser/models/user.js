var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testuserdb');

var userSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required!'},
  surname: {type:String},
    age: {type: Number}
});


var User = mongoose.model('User', userSchema);
exports.User = User;

// curl -i -X POST -H "Content-Type: application/json" -d '{"name":"aaa","surname":"bbb","age":"123"}' http://localhost:3000/users
// curl localhost:3000/users/54cc01771239a86c660707d7
// curl localhost:3000/users