require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const IndexRouter = require('./routes/index')

const app = express() 

app.use(express.json());
app.use(IndexRouter)

mongoose.connect(process.env.MongoDB_URI)
.then(()=>{ 
    console.log('MongoDB connected succesfully!');
})
.catch((err)=>{
    console.log("Error in connecting to MongoDB:",err);
})



app.listen(process.env.PORT , ()=>{
     console.log("Server is runnning on port :",process.env.PORT)
})

app.use(IndexRouter)


