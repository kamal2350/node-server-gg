import mongoose from "mongoose";
const billSchema = mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    customerNumber:{
        type:Number
    },
    totalAmount:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
    },
    cartItems:{
        type:Array,
        required:true
    },
    paymentMode:{
        type:String,
        required:true
    },
    subTotal:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
    }
},
{timeStamps:true}
);

const Bills = mongoose.model("bills",billSchema);
export default Bills