//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express

const ProductController= require("../controllers/productController.js") //requiero ProductController para hacer funcionar los controladores

router.get("/products",ProductController.getProduct );//Devuelve todos los productos [Funciona tanto en Postman como en localhost]
router.post("/dashboard", ProductController.postDasboard);//Crea un nuevo producto [Funciona tanto en Postman como en localhost cuando actualizas /products]
module.exports = {router}; //exporto el enrutador --->[exportar y importar de la misma forma!!]