import express from "express"
import { createEntr, deleteEntr, readEntr, updateEntr } from "../controllers/entrController.js"

const entrRouter = express.Router()


// //CRUD
// //CREAR: POST
// entrRouter.post("/", (req, res) => {
//     createEntr(req, res)
// })

// //LEER: GET
// entrRouter.get("/:id", (req, res) => {
//     readEntr(req, res)
// })

// //ACTUALIZAR: PUT / PATCH
// entrRouter.patch("/:id", (req, res) => {
//     updateEntr(req, res)
// })

// //ELIMINAR: DELETE
// entrRouter.delete("/", (req, res) => {
//     deleteEntr(req, res)
// })

export default entrRouter

