var express = require('express');
var handlebars = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();

//body parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//handlebars
app.engine('handlebars',handlebars.engine('main'))
app.set('view engine',"handlebars")
app.set('views','views')



//Using CSS
app.use(express.static(__dirname + '/public'));
//using img
app.use(express.static(__dirname + '/views'));

// Rotes
app.get('/', function (req, res) {
    res.render('home')
});
app.get('/home', function (req, res) {
    res.render('home')
});


  
app.listen(5000);
   