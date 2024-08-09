import Question from "../Models/Questions.js";
const getQuestion=async(req,res)=>{
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
export default getQuestion;
