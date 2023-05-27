import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db/db.js';
import { readdirSync } from 'fs';

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

//routes
// readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route)))

const routes = await readdirSync('./routes');
routes.forEach(async (route) => {
  const { default: routeModule } = await import(`./routes/${route}`);
  app.use('/api/v1', routeModule);
});



const PORT = process.env.PORT;

// GETTING HOME PAGE
app.get('/',(req,res)=>{
    res.send("HELLO World");
})



const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => console.log('Server started on port http://localhost:5000'));
    }catch(error){
        console.log(error);
    }
};

startServer();