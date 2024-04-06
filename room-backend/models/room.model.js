import mongoose from "mongoose";
const {Schema}=mongoose;


export const roomSchema=new Schema({
     id:{
        type:String,
        required:true,
        unique:true
     },
     occupantName:{
        type:String,
        required:true,
     },
     currentTemperature:{
        type:Number,
        required:true,
        min:10,
        max:40
     },
     heatingEnabled:{
        type:Boolean,
        default:false
     },
     coolingEnabled:{
        type:Boolean,
        default:false
     },
})

export default mongoose.model('Room',roomSchema)