var swig = require('swig');
swig.setDefaults({ cache: false });

var express = require('express');
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.listen(3000, function(){
  console.log('listening on ' + 3000);
});

var routes = require('/routes');