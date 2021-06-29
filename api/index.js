const Dot = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');

Dot.config()





const app = express();


mongoose.connect( process.env.MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log('database is connected')
    }
).catch(err => console.log(err))


const port = process.env.PORT  || 5000;

app.listen( port, () => {



    console.log(`listening on ${port}`)

})