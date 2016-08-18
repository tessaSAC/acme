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
router.get('/products/add', function(req,res, next){
    res.render('add');
});

router.post('/products/add',function(req, res, next){
   console.log(req.body.product);
   product.addProduct(req.body.product);
   
   res.redirect('/products');
})



module.exports = router; 