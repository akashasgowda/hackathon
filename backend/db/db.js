import mongoose from "mongoose";

const connectDB = (uri)=>{

        mongoose.set('strictQuery',true);
        //db connection
        mongoose.connect(uri)
        .then(()=>console.log('MongoDB Connected'))
        .catch((err)=>console.log(err));
};

export default connectDB;
