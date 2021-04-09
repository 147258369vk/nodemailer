var express = require('express');
var bodyparser = require('body-parser'); 
var session=require('express-session');


var apiroutes=require('./routes/userRoutes');


var app = express();

app.use(session({secret:"ABC223"},{saveUnitinialized:true,resave:true}))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',apiroutes);

app.listen(3000);




