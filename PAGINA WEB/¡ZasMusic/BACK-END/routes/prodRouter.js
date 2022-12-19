import express from "express"
import { createProd, deleteProd, readProd, updateProd } from "../controllers/prodController.js"

const prodRouter = express.Router()

//CRUD
//CREAR: POST
prodRouter.post("/", (req, res) => {
    createProd(req, res)
})

//LEER: GET
prodRouter.get("/:nompro", (req, res) => {
    readProd(req, res)
})

// //LEER: GET
// prodRouter.get("/:id", (req, res) => {
//     readProd(req, res)
// })

//ACTUALIZAR: PUT / PATCH
prodRouter.patch("/:id", (req, res) => {
    updateProd(req, res)
})

//ELIMINAR: DELETE
prodRouter.delete("/", (req, res) => {
    deleteProd(req, res)
})

export default prodRouter

