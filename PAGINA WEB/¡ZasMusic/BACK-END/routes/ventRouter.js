import express from "express"
import { createVent, deleteVent, readVent, updateVent } from "../controllers/ventController.js"

const ventRouter = express.Router()

//CRUD
//CREAR: POST
ventRouter.post("/", (req, res) => {
    createVent(req, res)
})

//LEER: GET
ventRouter.get("/:id", (req, res) => {
    readVent(req, res)
})

//ACTUALIZAR: PUT / PATCH
ventRouter.patch("/:id", (req, res) => {
    updateVent(req, res)
})

//ELIMINAR: DELETE
ventRouter.delete("/", (req, res) => {
    deleteVent(req, res)
})

export default ventRouter

