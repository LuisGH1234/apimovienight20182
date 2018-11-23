const express = require('express');
const app = express();

const userRoute = require('./src/routes/user/user_route');
//const eventRouter = require('./routes/event/event_router');
const rolRouter = require('./src/routes/event/rol_router');

// Settings
app.set('port', process.env.PORT || 3000);

//Middleware
//si estamos recibiendo un json lo convierte y sera accesible en las rutas
app.use(express.json());
// inject an error handling middleware
app.use((e, req, res, next) => {
    return res.status(500).json({error: {stack: e.stack}});
});

// Routes
app.use('/api/v2/', userRoute);
app.use('/roles', rolRouter);


// Report
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Omdb api key: deb5b9ed
