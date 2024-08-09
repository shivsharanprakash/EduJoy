import Quiz from "../Models/Quiz.js";
const getQuizzes=async(req,res)=>{
    try {
        const quizzes=await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
export default getQuizzes;