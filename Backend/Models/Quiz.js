import monngoose from 'mongoose';
const quizSchema=new monngoose.Schema({
    question:{
        type:String,
        reqyired:true,
    },
    options:{
        type:[String],
        required:true,    
    },
    answer:{
        type:String,
        required:true,
    },
    stage:{
        type:Number,
        required:true
    }
});

const Quiz=monngoose.model('Quiz',quizSchema);
export default Quiz;