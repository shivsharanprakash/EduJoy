import mongoose from 'mongoose';
const ResourcesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    content:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

const Resource=mongoose.model('Resource',ResourcesSchema);
export default Resource;
