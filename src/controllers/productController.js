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

    async deleteProduct (req, res) {
        try {
          const id = req.params._id
          const deletedProduct = await Product.findByIdAndDelete(id)
          if (!deletedProduct) {
            return res.status(404).json({message: "Product with that id not found"})
          }  
          res.json({message: "Product deleted successfully", deletedProduct})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal server error" });
        }
    },
   

     async updateProduct(req,res){//creo una función asincrona 
      try{ //en este bloque recojo la información de la request 
          const id=req.params._id;
          const nombre= req.body.nombre;
          const descripción=req.body.descripción;
          const categoria=req.body.categoria;
          const imagen = req.body.imagen;
          const talla=req.body.talla;
          const precio=req.body.precio;        //En este bloque espero la respuesta y busco en la base de datos por id y actualizo todo
  const product = await Product.findByIdAndUpdate(id,{nombre,descripción,imagen,categoria, talla,precio},{new:true})//El new:true garantiza que el documento que reenderiza será el actualizado desde la primera recarga 
  if(!product) {//si el producto no existe devolverá un error 404
      return res.status(404).json({mensaje: 'Product id not found'})
    } 
    res.json(product)//si existe enviará el producto modificado
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
     },

     async getAllProductSSR (req, res) {
        try {
            const products = await Product.find();
            res.send(`<h1>Productos</h1>
              ${products.map(product => {
                return (
                  `<div>
                    <h2>Titulo: ${product.nombre}</h2>
                    <p>Precio: ${product.precio}</p>
                    <img src="${product.imagen}" alt="${product.descripción}">
                  </div>`
                )
              } ).join('')}
            </div>`);
        } catch (error) {
            console.log(error)
        }
      }


}

    module.exports= ProductController;