import express from 'express';
import { connectToMongoDb } from './db.js';
import UserRoutes from './Routes/UserRoutes.js'
import QuizeRoutes from './Routes/QuizeRoutes.js'
import ScienceRoute from './Routes/ScienceRoute.js'
import GamesRoute from './Routes/GamesRoute.js'
import QuestionRoute from './Routes/QuestionRoute.js'
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
connectToMongoDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',UserRoutes);
app.use('/quiz',QuizeRoutes)
app.use('/sciencequiz',ScienceRoute);
app.use('/games',GamesRoute);
app.use('/question',QuestionRoute);

app.listen(port, () => {
    console.log(`Example is Running on port ${port}`);
});