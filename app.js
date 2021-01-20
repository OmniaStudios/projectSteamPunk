const express = require('express');
//const methodOverride = require('method-overrode');
const app = express();

const routerBasic = require('./routes/routerBasic');
const routerAdmin = require('./routes/routerAdmin');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use('/', routerBasic);
app.use('/admin', routerAdmin);

module.exports = app