
var express = require('express');
var router = express.Router();

const Producto = require("../../models/Producto")

/* GET /api/productos. */

router.get('/', async function(req, res, next) {
try{
    const name= req.query.name;
    const price = req.query.price;
    const tag = req.query.tag;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;
    //http://localhost:3000/?sort=price Ordena por precio ascendente
    // http://localhost:3000/?sort=-price Ordena por precio descendente
    const filtro ={};
    if(name){
        filtro.name = name;
    }
    if(price){
        filtro.price = price;
    }
    if(tag){
        filtro.tag = tag;
    }
   
    const resultado = await Producto.lista(filtro, limit, skip, fields, sort);
   
      res.render('index', {resultSet: resultado});
    
      
} catch(err){
    next(err);
}
  
});


//GET/api/productos:id --> Nos creamos un métdo que nos va a servir para obtener un producto a partir de su ID

router.get("/:id", async (req, res, next)=>{
    try {
        const _id = req.params.id;
        const producto = await Producto.findOne({_id:_id})
        if(!producto){
         res.status(404).json({error: "Not Found"});
         return;
        }
        res.json({result:producto})
    } catch (error) {
        next(error)
    }
})

// POST: /api/productos --- > Para crear un nuevo producto. Como es a través del método post, esos datos se los vamos a pasar en el BODY

router.post("/", async (req, res, next)=>{
    try {
        const productoData = req.body;
        const producto = new Producto(productoData);
        const productoCreado = await producto.save();
        res.status(201).json({result: productoCreado});
    } catch (error) {
        next(error);
    }
})

// ACTUALIZAR UN PRODUCTO : PUT / api/productos:id(body) Hay que pasar 2 parámetros, el ID del producto que quiero actualizar y en el body qué es lo que le quiero actualizar a ese producto

router.put("/:id", async (req, res, next)=>{
    try {
        const _id = req.params.id;
        const productoData = req.body;

        const productoActualizado = await Producto.findOneAndUpdate({_id: _id}, productoData, {
            new:true,
            useFindAndModify: false
        }); //usamos new:true para que nos devuelva el dato actualizado
        
        if(!agenteActualizado){
            res.status(404).json({error: "Not found"});
            return
        }
        res.json({result:productoActualizado});
        
    } catch (error) {
        next(error);
        
    }
});


//DELETE /api/productos:id
//Elimina un producto

router.delete("/:id", async (req, res, next)=>{
    try {
        const _id= req.params.id;
        await Producto.deleteOne({_id : _id})
        res.json();
    } catch (error) {
        next(error);
        
    }
})


module.exports = router;