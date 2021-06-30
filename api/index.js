const Dot = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const AuthRouter = require('./routes/auth');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');

Dot.config()





const app = express();


mongoose.connect( process.env.MONGOURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false}).then(
    ()=>{
        console.log('database is connected')
    }
).catch(err => console.log(err))


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( '/api',AuthRouter)
app.use('/update',userRouter);


const port = process.env.PORT  || 5000;

app.listen( port, () => {



    console.log(`listening on ${port}`)

})