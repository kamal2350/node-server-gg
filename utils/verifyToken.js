import  jwt from "jsonwebtoken";

//verifyToken
export const verifyToken=(req,res,next)=>{
    try {
        const token = req.cookies.access_token;
       
        if(!token){
           res.status(401).json("You are not authenticated");

        }
        else{
            jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
                if(err){
                    return res.status(403).json("You are not authenticated")
                }else{
                    req.user= user;
                    return next();
                }
            })
        }
    } catch (error) {
            console.log(error);
    }
}

//verify User 

export const verifyAdmin = (req,res,next)=>{
    try {
        verifyToken(req,res,()=>{
            if(req.user.isAdmin){
                return next();
            }
           else{
                return res.status(403).send("Not Authorized");
           }
        })
    } catch (error) {
        return res.status(403).send(error);
    }
}