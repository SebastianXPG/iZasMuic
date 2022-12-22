import express from "express"


//  import { createUser, deleteUser, readUser, updateUser, userList } from "../controllers/userController.js"
//   import { createUser, deleteUser, getUser, updateUser, } from "../controllers/userController.js";
import { createUser, deleteUser, readUser, updateUser, } from "../controllers/userController.js";

import validatePassword from "../middlewares/validatePassword.js";

const userRouter = express.Router();

userRouter.post("/", validatePassword, createUser);
userRouter.get("/", validatePassword, readUser);
userRouter.patch("/", validatePassword, updateUser);
userRouter.delete("/", validatePassword, deleteUser);



// const userRouter = express.Router()
// //CRUD
// //CREAR: POST
// userRouter.post("/", (req, res) => {createUser(req, res)})
// //userList: GET
// userRouter.get("/list", userList)
// //LEER: GET
// userRouter.get("/:id", (req, res) => {readUser(req, res)})
// //ACTUALIZAR: PUT / PATCH
// userRouter.patch("/:id", (req, res) => {updateUser(req, res)})
// //ELIMINAR: DELETE
// userRouter.delete("/", (req, res) => {deleteUser(req, res)})


export default userRouter