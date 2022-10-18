import mongoose from 'mongoose';
//import dotenv from 'dotenv/config'

async function connectDb(){
    try{
        await mongoose.connect('mongodb+srv://Lopes01:Lopes01@cluster0.evxl2c8.mongodb.net/?retryWrites=true&w=majority')
        console.log(">>> database connected.")
        
    }catch(e){
        console.log(e);
    }
}

export default connectDb;