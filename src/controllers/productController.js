//Poner funciones de controladores separado de rutas
const {Product} =require ("../models/Product")// requiero los products de models

const ProductController={
    async getAllProduct (req, res)  {
        try {
            const products = await Product.find();//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(products);
        } catch (error) {
            console.error(error);
        }
    },
    async  postDasboard (req,res) {
        try{
            const product= await Product.create({...req.body})
        res.status(201).json(product)
        } catch (error){console.log(error)}
    },
    
    async getOneProduct (req, res)  {
        try {
            const id = req.params._id;
            const product = await Product.findById(id)//Find es un metodo de mongo que te permite encontrar todos los productos en este caso
            res.send(product);
        } catch (error) {
            console.error(error);
        }
    },
   

//     async updateProduct(req,res){//creo una función asincrona 
//      try{ //en este bloque recojo la información de la request 
//          const id=req.params._id;
//          const nombre= req.params.nombre;
//          const descripción=req.params.descripción;
//          const categoria=req.params.categoria;
//          const imagen = req.params.imagen;
//          const talla=req.params.talla;
//          const precio=req.params.precio;
//          //En este bloque espero la respuesta y busco en la base de datos por id y actualizo todo
//  const product = await Product.findByIdAndUpdate(id,{nombre,descripción,imagen,categoria, talla,precio},{new:true})//El new:true garantiza que el documento que reenderiza será el actualizado desde la primera recarga 
//  if(!product) {//si el producto no existe devolverá un error 404
//      return res.status(404).json({mensaje: 'Product id not found'})
//    } 
//    res.json(product)//si existe enviará el producto modificado
//  } catch (error) {
//    res.status(500).json({ error: 'Internal server error' });
//  }
//     }


}

    module.exports= ProductController;