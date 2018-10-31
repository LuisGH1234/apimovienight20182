const express = require('express');
const app = express();

const userRoute = require('./routes/user/user_route');
//const eventRouter = require('./routes/event/event_router');
const rolRouter = require('./routes/event/rol_router');

// Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());/*si estamos recibiendo un json lo convierte y sera accesible en las rutas*/

// Routes
app.use('/api/v2/', userRoute);
//app.use('/events', eventRouter);
app.use('/roles', rolRouter);

// catch unrouted urls
app.all('*', function(req, res) {
    throw new Error("Bad request")
});

// inject an error handling middleware
app.use((e, req, res, next) => {
    if (e.message === "Bad request") {
        res.status(400).json({error: {msg: e.message, stack: e.stack}});
    }
});

// Report
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Omdb api key: deb5b9ed