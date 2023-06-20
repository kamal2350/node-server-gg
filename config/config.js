import mongoose from 'mongoose'

const connectDb = async()=>{
        try {
            
            const conn = await mongoose.connect(process.env.MONGO_URI);
            console.log('database connected succesfully');

        } catch (error) {
            console.log(error.message);
            process.exit(1);
        }
}

export default connectDb;