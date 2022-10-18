import mongoose from 'mongoose';
//import dotenv from 'dotenv/config'

async function connectDb(){
    try{
        await mongoose.connect('mongodb+srv://your name:you@cluster0.evxl2c8.mongodb.net/?retryWrites=true&w=majority')
        console.log(">>> database connected.")
        
    }catch(e){
        console.log(e);
    }
}

export default connectDb;