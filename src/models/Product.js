// Crear modelo de producto mongoSchema 
const mongoose= require("mongoose");
const ProductSchema= new mongoose.Schema(
    {
nombre: String,
descripción: String,
imagen: String,
categoría:String,
talla: String,
precio: Number,
},
{timestamps:true}); //timestamps nos ayuda a saber cuando ha habido cambios en nuestra base de datos

const Product =mongoose.model("Product",ProductSchema)//creo una constante Producto que es igual al modelo de mongoose Product y ProductSchema

module.exports={Product}