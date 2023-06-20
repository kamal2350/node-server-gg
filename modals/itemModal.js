import mongoose from "mongoose";
const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
   
},{timestamps:true}
);
const Items = mongoose.model("Items",itemSchema);
export default Items;