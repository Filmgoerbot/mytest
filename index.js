const express=require('express');
const dotenv=require('dotenv');

const app = express();
dotenv.config()

app.use('/',(req,res)=>{
    res.json("Hi it is me Albin N J")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Started");
})