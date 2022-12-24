import express from "express"
import userModel from "../models/userModel.js";
const testRouter = express.Router()

testRouter.get("/:id", async (req, res) => {
//testRouter.get("/:nombre", async (req, res) => {
    //const edad = req.params.edad
    const nombre = req.params.nombre
    let documentos;

    try {
        documentos = await userModel.find({})
        //documentos = await userModel.find({nombre})
        //para wr con cmpos lo definimos constant antes  edad lin6, luego lo incluimos dentro find
        //documentos = await userModel.find({edad})
            //"edad": {$gte:0, $lte:400}  
            // "edad": {$in:{$range:[20, 40]}}
        //}) //.sort({"edad": -1})
    } catch (error) {
        
    }
    res.json(documentos)
})

export default testRouter
