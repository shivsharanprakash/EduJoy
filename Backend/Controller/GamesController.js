import Game from "../Models/Games.js";
const getGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export default getGames;