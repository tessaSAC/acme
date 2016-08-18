var swig = require('swig');
swig.setDefaults({ cache: false });
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static('./views'));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

var routes = require('./routes');

app.use('/',routes);

app.listen(3000, function(){
  console.log('listening on ' + 3000);
});
