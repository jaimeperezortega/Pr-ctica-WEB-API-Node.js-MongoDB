
var express = require('express');
var router = express.Router();

const Producto = require("../../models/Producto")

/* GET /api/productos. */

router.get('/', async function(req, res, next) {
try{
    const resultado = await Producto.find();
    res.json(resultado);
} catch(err){
    next(err);
}


  
});

module.exports = router;