
/*************************
*  ROUTES FOR DB SCRIPT  *
*************************/

var express = require('express')
	scriptController = require('./../../controllers/scriptController');

/** USE EXPRESS **/
var router = express.Router();

router.get('/duplicate_entry', async(req, res) =>{

try{

	const controllerResponse = await scriptController.getDuplicateEntry();
	res.send({
		message: 'success',
		status: 1,
		data: controllerResponse
	})

}
catch(e){
	console.log('Error: ',e);
	res.send(e);
}

})



module.exports = router;