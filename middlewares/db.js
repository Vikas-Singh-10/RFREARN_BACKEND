import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

const options = {
  bufferCommands: false,
  dbName: process.env.DB_NAME
}

export const dbConnect = async(_,res,next) => {
  if(mongoose.connection.readyState === 1){
    console.log("-----ALREADY---CONNECTED-----");
    next();
  }else{
    try{
      await mongoose.connect(MONGODB_URI,options);
      console.log(`---DB---CONNECTED---TO---${process.env.DB_NAME}`);
      next();
    }catch(err){
      console.log(`---ERROR---${err}`);
      return res.send({status_code:409,success:false,message:'-----DB-CONNECTION-FAILED----'});
    }
  }
}  