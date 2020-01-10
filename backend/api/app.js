const express = require('express');
const bodyParser = require('body-parser');
const usersRouter =  require('./routes/users');
const aulasRouter = require('./routes/aulas');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

//Database connection
mongoose.connect('mongodb+srv://' + dbUsername + ':' + dbPassword + '@cluster0-5zym1.mongodb.net/' + dbName + '?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', usersRouter);
app.use('/aulas', aulasRouter);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

app.listen(3333, ()=>{
    console.log("Application working.")
})