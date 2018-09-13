const http = require("http");
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importando rutas
const customerRoute = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3000);
/*motor de plantillas / javascript embebido con html (.ejs)*/
app.set('view engine', 'ejs');
/*el modulo path se encarga de unir directorios*/
/*__dirname se encarga de darme la ruta del archivo que lo ejecuta (app.js)*/
/*path.join va a concatenar __dirname con views*/
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: process.env.IP,
    user:'luis1234',
    password:'',
    port:3306,
    database:'movienightdb'
}, 'single'));
app.use(express.urlencoded({extended: false}));/* tratamos de recibir el dato desde la propiedad body */

// routes
app.use('/customer', customerRoute);

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

/*
    Root User: luis1234
    Database Name: c9
    host: 'luis1234-movienight2-6355156'
*/