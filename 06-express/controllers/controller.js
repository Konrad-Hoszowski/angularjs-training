module.exports = {

    doGetAction: function (req, res) {
        
        var someJson = {"name": "aga", "age":5};
        
        res.status(200);
        res.send(someJson);
    },
    
    doGetActionUser: function (req, res) {
        console.log(req.paramsid);
        var someJson = {"name": "aga", "age":5};
        
        res.status(200);
        res.send(someJson);
    },
    
    
    doPostAction: function (req, res) {
        res.status(200);
        res.send("BBB");
    },
    
    doPutUserAction: function (req, res) {
        res.status(200);
        res.send("CCC");
    },
    
    doDeleteUserAction: function (req, res) {
        res.status(200);
        res.send("DDD");
    },
};