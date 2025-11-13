import mongoose from "mongoose";

const memorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

const Memory = mongoose.model("Memory", memorySchema);

export default Memory;