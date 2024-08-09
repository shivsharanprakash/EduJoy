import mongoose from "mongoose";
const GamesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
});

const Game=mongoose.model('Game',GamesSchema);
export default Game;