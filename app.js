const express = require('express');
//const methodOverride = require('method-overrode');
const app = express();

const routerBasic = require('./routes/routerBasic');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use('/', routerBasic);

module.exports = app