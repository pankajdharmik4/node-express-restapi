import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js'

//app initialize
const app = express();

const PORT = 5000;

//all files as json
app.use(bodyParser.json());

//Path for /users
app.use('/users',usersRoutes)

//Get Request (PATH, Callback Function(req,res)) 
// Brower can make get req
app.get('/',(req,res)=>res.send("Hello From Homepage."));

//listen to port 
app.listen(PORT, ()=>{
    console.log(`Server Running on port: http://localhost:${PORT}`)
})