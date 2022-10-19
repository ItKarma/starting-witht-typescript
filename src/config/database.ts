import mongoose from 'mongoose';
//import dotenv from 'dotenv/config'

async function connectDb(){
    try{
        await mongoose.connect('your uri')
        console.log(">>> database connected.")
        
    }catch(e){
        console.log(e);
    }
}

export default connectDb;
