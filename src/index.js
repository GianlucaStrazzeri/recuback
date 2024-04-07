console.log("Hola Mundo")
const express =require("express") //requerir express
const app= express()//inicializar express

const PORT = process.env.PORT || 3000; //process.env,PORT permite que luego se pueda enviar a db
const { dbConnection,} = require('./config/db');//requiero la functión desde db.js
dbConnection();//invoco la función antes de cualquier middleware para que no se reconecte a cada request

app.use(express.json());//Sirve como un middleware para todas las rutas, only parses JSON and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({extended:true})); //Sirve como un middleware para todas las rutas, only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body .
//{extended:true} sirve para corregir el error body-parser deprecated undefined extended: provide extended option



app.get("/", (req,res)=>{
    res.send("hola")
})

app.listen(PORT,()=>//Escucho al servidor 
console.log(`Express escuchando en el http:localhost:${PORT}`))