
import cors from "cors"
import dotenv from "dotenv"
import express  from "express"
import mongoose from "mongoose"
// import testRouter from "./routes/testRouter.js";
// import userRouter from "./routes/userRouter.js";
// import prodRouter from "./routes/prodRouter.js";
// import ventRouter from "./routes/ventRouter.js";
// import entrRouter from "./routes/entrRouter.js";
// import loginRouter from "./routes/loginRouter.js";
import apiRouter from "./routes/apiRouter.js"

//Esta linea de código habilita el uso de variables de entorno en la aplicación
dotenv.config()


const app = express();

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log("El servidor se está ejecutando correctamente.");
})

//  mongoose.connect("mongodb+srv://walletapp:walletapp*@clusterwalletapp.dwdrwvh.mongodb.net/dbwalletapp?retryWrites=true&w=majority",(err)=>{
    mongoose.connect("mongodb+srv://zasmusic:zasmusic*@zasmusicapp.1oswtqo.mongodb.net/zasmusicApp?retryWrites=true&w=majority",(err)=>{    

    if(err){
        console.log(err);
    } 
    
    else{
        console.log("La base de datos se encuentra conectada. ");        
    }    
})
//Middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
// //console.log("por aki pasa")
// /*app.use(express.json())*/
// app.use("/user", userRouter) 
// app.use("/test", testRouter)
// app.use("/prod", prodRouter) 
// app.use("/vent", ventRouter) 
// app.use("/login", loginRouter)
// app.use("/Register", loginRouter);
// //app.use("/entr", entrRouter)
// // del otro modo ultimo app.use("/api", apiRouter)

//ahora para unit el from y el backend manejo solo una ruta
app.use("/api", apiRouter);
app.use("/", (req, res) => res.json("Bienvenido a ¡ZasMusic"))



