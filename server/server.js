import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan'
import router from './routers/myRouter.js';
import bodyParser from 'body-parser'
const app = express();
dotenv.config();
app.use(express.json());

app.use(morgan("common"));
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello');
})


app.use('/api/poll', router)

mongoose.connect(process.env.MONGO_URL || "mongodb+srv://tamirzip:<mongo_password>@tamirwork.oque8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mongodb not connected");
    console.log(error);
});

app.get('*', (req, res) =>{
    res.status(404).send('No Page')
})

app.listen(5000, () => console.log('server running'))
