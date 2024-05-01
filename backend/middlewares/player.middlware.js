const USER_ROLES = require('../utils/USER_ROLES_ENUM')

const playerMiddleware = (req, res, next)=>{
    try{
        if( req.user.role === USER_ROLES.PLAYER || req.user.role === USER_ROLES.ADMIN)
        return next();
    return res.status(401).send('Unauthorized')
    } catch (e){
        console.log("Internal server error: ", e)
        return res.status(500).send('Internal server error.')
    }
};

module.exports = playerMiddleware;