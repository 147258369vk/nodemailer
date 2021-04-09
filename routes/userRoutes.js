var express = require('express');

var myCtrl=require('../controller/userController');

var route=express.Router();

route.get('/',myCtrl.openPage);
route.post('/mail',myCtrl.sendingEmails);


route.get('/login',myCtrl.loginpage);


module.exports=route;