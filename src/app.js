const express = require('express');
const app = express();

// Importando rutas
const mymediaRoute = require('./routes/user/play/personal_media_content_route');
const myplaylistRoute = require('./routes/user/play/personal_playlist_route');
const userRoute = require('./routes/user/user_route');
const friendRoute = require('./routes/user/social/friend_route');
const notificationRoute = require('./routes/user/social/notification_route');

const eventRouter = require('./routes/event/event_router');
const rolRouter = require('./routes/event/rol_router');

// Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());/*si estamos recibiendo un json lo convierte y sera accesible en las rutas*/

// Routes
app.use('/mymedia',mymediaRoute);
app.use('/myplaylist', myplaylistRoute);
app.use('/user', userRoute);
app.use('/friend', friendRoute);
app.use('/notification', notificationRoute);

app.use('/event', eventRouter);
app.use('/rol', rolRouter);

// Report
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
