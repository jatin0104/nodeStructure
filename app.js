/** REQUIRED PACKAGES **/

var express = require('express'),
	app = express();
app.use(express.json());

var routes = require('./src/routes/index');
app.use('/auth', routes.Auth)

/** MODULE EXPORTS  **/
module.exports = app;
