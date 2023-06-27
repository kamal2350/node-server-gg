import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    isAdmin:{

        type:Boolean,
        required:true,
    },
    bills:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bills'
    }],

},
    {
        timestamps:true,
    }
);
const UserModel = mongoose.model("User",userSchema);
export default UserModel;