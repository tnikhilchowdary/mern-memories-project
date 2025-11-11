import express from "express";
import mongoose from "mongoose";
const configDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://memory:memory%401234@cluster0.j73fvkx.mongodb.net/memory?appName=Cluster0")
        console.log("MongODb is connected!");
    }
    catch(error){
        console.log(error, "Error in mongoDb Connection")
        console.error(error);
    }
}

export default configDb;