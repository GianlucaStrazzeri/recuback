//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express

const ProductController= require("../controllers/productController.js") //requiero ProductController para hacer funcionar los controladores

router.get("/products",ProductController.getAllProduct );//Devuelve todos los productos [Funciona tanto en Postman como en localhost]
router.get("/products/:_id",ProductController.getOneProduct );//Devuelve un producto a través del ID [Funciona tanto en Postman como en localhost]
router.get('/ssr', ProductController.getAllProductSSR );//Devuelve todos los productos haciendo server side rendering
router.post("/products", ProductController.postDasboard);//Crea un nuevo producto [Funciona tanto en Postman como en localhost cuando actualizas /products]
router.delete("/products/:_id",ProductController.deleteProduct)//Debe de eliminar un producto insertando el id NO FUNCIONA
router.put("/products/:_id", ProductController.updateProduct); //Modifica un producto existente desde el id

module.exports = {router}; //exporto el enrutador --->[exportar y importar de la misma forma!!]
