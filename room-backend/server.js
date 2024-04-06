import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import buildingRoute from './routes/building.routes.js';


const app=express();
dotenv.config();

const Connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}

app.use(express.json());

app.use('/api',buildingRoute);



// app.use((err,req,res,next)=>{
//     const errorStatus=err.status || 500
//     const errorMessage=err.message || 'somthing went wrong!'
  
//     return res.status(errorStatus).send(errorMessage)
//   })


app.listen(8800,()=>{
    Connect();
    console.log("Backend server running!");
})
