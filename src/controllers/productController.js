//Poner funciones de controladores separado de rutas
const {Product} =require ("../models/Product")// requiero los products de models

const ProductController={
    async getProduct (req, res)  {
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
    }


}

    module.exports= ProductController;