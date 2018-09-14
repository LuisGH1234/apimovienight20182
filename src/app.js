const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importando rutas
const playlistRoute = require('./routes/playlistRoute');
const userRoute = require('./routes/userRoute');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: process.env.IP,
    user:'luis1234',
    password:'',
    port:3306,
    database:'movienightdb'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/playlist', playlistRoute);
app.use('/user', userRoute);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
