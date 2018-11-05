const jwt = require('jsonwebtoken');
module.exports = function isAuthenticated(req, res, next) {
    console.log("REQ", req.headers.authorization)
    jwt.verify(req.headers.authorization, "movie_app_secret", function(err, decoded) {
        console.log("ERROR", err);
        if(err) {
            console.log("Error", err);
            res.status(403).send({"msg": "invalid token"})
        }else{
            req.user = {identifier: decoded.userId};
            console.log("req.user", req.user);
            next();
        }
      }); 
  }