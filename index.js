const express = require('express');
const app = express();
const morgan = require('morgan');

const userRoute = require('./src/routes/user_route');
const rolRouter = require('./src/routes/rol_route');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('API_Version', 'v3');
//Middleware
//si estamos recibiendo un json lo convierte y sera accesible en las rutas
app.use(express.json());
app.use(morgan('dev'));
// inject an error handling middleware
app.use((e, req, res, next) => {
    return res.status(500).json(
        {
            route: req.originalUrl,
            error: { stack: e.stack }
        }
    );
});

// Routes
app.use(`/api/${app.get('API_Version')}/`, userRoute);
app.use('/roles', rolRouter);

app.get('/dev', (_, res) => {
    res.json({ active: 'true' });
});


// Report
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}, API Version: ${app.get('API_Version')}`);
});

//Omdb api key: deb5b9ed
