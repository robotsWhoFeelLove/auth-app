const jwt = require('jsonwebtoken')

function verifyToken(req,res,next){

    const bearerHeader = req.headers['authorization'];
  

    if(typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1];
 
        req.token = bearerToken;

        next();

    } else {
    
        res.sendStatus(403);
    }
}

function checkToken(req,res,next){
jwt.verify(req.token, process.env.JWT_SECRET, (err,authData)=> {
    
    if(err){
        const err = new Error("Authorization Failed. Please return to login.");
        err.status = 403;
        return next(err)
    } else {
        next()
    }
   })
}

module.exports = {verifyToken,checkToken}