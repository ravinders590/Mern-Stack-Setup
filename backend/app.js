// import

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// db
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('db connected')).catch(()=> console.log('db not conected'))
//middleware
app.use(morgan('dev'));
app.use(cors({origin:true,credentials:true}))

//routes

const testroutes = require('./routes/test');
app.use('/',testroutes);

//port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port,()=>{
    console.log(`server is running ${port}`);
})

