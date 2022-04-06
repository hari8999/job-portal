
import express from 'express';
import dotenv from "dotenv";

//component
import Connection from './database/db.js';
 import Routes from './routes/Routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
 app.use('/', Routes);
 
const PORT1 = 8000; 

app.get('/',(req,res)=>{
    res.json("server start")
})

const username= process.env.MONGO_USERNAME;
const password= process.env.MONGO_PASSWORD;

Connection(username,password);
app.listen(process.env.PORT ||PORT1, console.log(`Server is listening on PORT no. ${PORT1}`));




