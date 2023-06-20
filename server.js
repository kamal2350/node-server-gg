
import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/config.js';
import itemRouter from './routes/itemRoutes.js';
import billRouter from './routes/billRoutes.js';
dotenv.config();
connectDb();
// port

const port = process.env.PORT;

// rest object

const app = express();

// middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// routes

app.get('/',(req,res)=>{
    res.send("hello world");
});
app.use("/api/items",itemRouter);
app.use("/api/bills",billRouter);

// listen

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})