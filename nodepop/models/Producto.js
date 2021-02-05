'use strict';


//Cargamos la librería de Mongoose

const mongoose = require("mongoose");

//1. Definimos un esquema

const productoSchema = mongoose.Schema({
    name: {type: String, index: true},
    price: {type: Number, index: true},
    venta: Boolean,
    photo: String,
    tags: {type:[String], index:true},
}, {
    collection: "anuncios"
});

//2. Creamos el modelo con el esquema definido

const Producto = mongoose.model("Producto", productoSchema);

//3. Exportamos el modelo

module.exports = Producto;