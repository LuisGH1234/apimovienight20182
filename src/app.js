const express = require('express');
const app = express();

const userRoute = require('./routes/user/user_route');
//const eventRouter = require('./routes/event/event_router');
const rolRouter = require('./routes/event/rol_router');

// Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());/*si estamos recibiendo un json lo convierte y sera accesible en las rutas*/

// catch unrouted urls
/*router.all('*', function(req, res) {
    throw new Error("Bad request");
});*/

// inject an error handling middleware
app.use((e, req, res, next) => {
    return res.status(500).json({error: {stack: e.stack}});
});

// Routes
app.use('/api/v2/', userRoute);
//app.use('/events', eventRouter);
app.use('/roles', rolRouter);


// Report
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Omdb api key: deb5b9ed