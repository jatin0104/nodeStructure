/** REQUIRED PACKAGES **/

var express = require('express'),
	app = express()
	dbRoute = require('./routes/db/dbRoutes');

/** USE EXPRESS SETTING FOR ROUTES **/
app.use('/api',dbRoute);

/** MODULE EXPORTS  **/
module.exports = app;
