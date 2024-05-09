//Contiene Rutas de la app de la tienda de productos
const express= require ("express") //requiero express de la raiz index.js
const router=express.Router(); //inicializo enrutador de express

const ProductController= require("../controllers/productController.js") //requiero ProductController para hacer funcionar los controladores


router.get("/products",ProductController.getAllProduct );//Devuelve todos los productos [Funciona en Postman y localhost]
router.get("/products/:_id",ProductController.getOneProduct );//Devuelve un producto a través del ID [Funciona en Postman y localhost]
router.get('/ssr', ProductController.getAllProductSSR );//Devuelve todos los productos haciendo server side rendering
router.get("/productssr/:_id",ProductController.getOneProductSSR)//Deberia de devolver solo un producto haciendo server side rendering
router.post("/products", ProductController.postDasboard);//Crea un nuevo producto [Funciona en Postman y cuando actualizas /products]
router.post("/products/:_id",ProductController.deleteProduct)//Elimina un producto desde su pagina, los formularios en html, solo tienen dos métodos: get y post por eso no se utilza router.delete
router.put("/products/:_id", ProductController.updateProduct); //Modifica un producto existente desde el id
router.get("/createproduct",ProductController.createProduct);//Intento de crear un producto desde un formulario


module.exports = {router}; //exporto el enrutador --->[exportar y importar de la misma forma!!]
