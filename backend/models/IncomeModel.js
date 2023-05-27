import mongoose from "mongoose";

const Income = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        maxLength :20,
        trim:true
    }
},{timestamps:true})

const IncomeSchema = mongoose.model('Income',Income);

export default IncomeSchema;
