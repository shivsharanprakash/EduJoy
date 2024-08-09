import ScienceQuiz from "../Models/ScienceQuiz.js";
const getScienceQuiz = async (req, res) => {
    try {
        const science = await ScienceQuiz.find();
        res.json(science)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default getScienceQuiz