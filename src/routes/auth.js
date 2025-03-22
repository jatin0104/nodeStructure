var express = require('express');
var app = express();
var router = express.Router();
const AuthController = require('./../controllers/AuthController');
const { checkRequestBodyType, checkRequestBody } = require('./../middlewares/Auth')

// Auth Page
router.get('/login', (req,res)=>{
    res.status(200).send('Login Page')
})

router.post('/login', checkRequestBodyType, checkRequestBody, async (req,res)=>{
    const body = req.body;
    const c = await AuthController.getInfo(body)
    res.status(200).json(c)
})

app.use(router);

module.exports = router;