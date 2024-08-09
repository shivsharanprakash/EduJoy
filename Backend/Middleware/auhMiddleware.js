import jwt from 'jsonwebtoken';
const JwtSecret = "ShivsharanPrakashVasant";
const authMiddleware=(req,res,next)=>{
    const token =req.header('Authorization').replace('Bearer','');
    if(!token){
        return res.status(401).josn({error:'No Token ,authorization denied'});
        try {
            const decoded=jwt.verify(token,JwtSecret);
            req.user=decoded.id;
            next();

        } catch (error) {
            res.ststus(401).json({error:'Token is not valid'});
        }
    }
};

export default authMiddleware;