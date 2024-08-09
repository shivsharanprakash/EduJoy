import mongoose from 'mongoose';
const ScienceSchema= new mongoose.Schema({
    question:{
        type:String,
        reqyired:true,
    },
    answer:{
        type:String,
        required:true,
    },
    stage:{
        type:Number,
        required:true
    }
})

const ScienceQuiz=mongoose.model('ScienceQuiz',ScienceSchema);
export default ScienceQuiz;