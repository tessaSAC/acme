var express = require('express');
var router = express.Router();

var product = require('./product.model');

router.get('/',function(req, res, next){
     res.render('index'); 
})

router.get('/products', function(req,res, next){
    var products = product.getProducts();
    res.render('products', {    
        products: products
    });
})

module.exports = router; 