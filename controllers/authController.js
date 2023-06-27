import UserModel from "../modals/userSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register a user
export const registerUser =async(req,res)=>{
   try {
        const {password,...others}= req.body;
        const hashedPassword= await bcrypt.hash(password,10);
        console.log(hashedPassword);

        const registerUser = new UserModel({
            ...others,
            password:hashedPassword
        });


        await registerUser.save();
        res.status(201).json("User created");
   } catch (error) {
        res.status(400).json("Something went wrong");
   }
} 


//login user

export const loginUser = async(req,res)=>{
    try {

        const {password,username}= req.body;
        console.log(req.body);
        const user =await UserModel.findOne({
            $or:[
                {number:username},
                {email:username}
            ]
        });
        if(user){
            const isMatch = await bcrypt.compare(password,user.password);
            
            if(isMatch){
                console.log("hii");
                const {password,...others} = user._doc;
                const token = jwt.sign({...others},process.env.TOKEN_KEY);
                res.cookie('access_token',token,{
                    maxAge:86400000,
                    httpOnly:true,
    
                }).status(200).json({...others})
               
              
               
            }else{
                res.status(404).json("invalid Credentials");
            }
          
           
        }else{
            
          
            res.status(404).json("user Not found");
        }
        
    } catch (error) {
        res.status(404).json(error);
    }
   
}

export const logoutUser= async(req,res)=>{
        try {
            
            await res.clearCookie('access_token');
            res.end();
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
}

