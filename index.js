const express =require("express") //requerir express
const app= express()//inicializar express
const PORT = process.env.PORT || 3000; //process.env,PORT permite que luego se pueda enviar a db
const { dbConnection,} = require('./src/config/db');//requiero la functión desde db.js
const path= require ("path") //requiero path que servirá para usar express.static 


const {router} = require('./src/routes/productsRoutes'); //requiero el enrutador desde productRoutes.js
dbConnection();//invoco la función antes de cualquier middleware para que no se reconecte a cada request

app.use(express.static(path.join("src","assets")));// Sirve para cargar archivos estáticos como las imagenes desde el servidor en el server side rendering
app.use(express.json());//Sirve como un middleware para todas las rutas, only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended:true})); //Sirve como un middleware para todas las rutas, only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body .
//{extended:true} sirve para corregir el error body-parser deprecated undefined extended: provide extended option



app.use('/', router);//Esto me permite utilizar el enrutador al entrar a la pagína principal

app.listen(PORT,()=>//Escucho al servidor 
console.log(`Express escuchando en el http:localhost:${PORT}`))//copiando y pegando el codigo de consola en internet cargaré la ruta