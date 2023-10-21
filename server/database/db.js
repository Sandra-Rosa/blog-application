import mongoose from 'mongoose';
import dotenv from 'dotenv';

const Connection =async  () =>{
    dotenv.config();
    const URL = process.env.URL;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true });
        console.log('database connected successfully')
    }catch(error){
        console.log(`error while connecting ${error}`);
    }
}

export default Connection;