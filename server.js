const app = require('./app');

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(
        `SteamPunk | Server started on port ${PORT} - use 'Localhost:${PORT}`
        );
});

