import express from "express";


import { createProd, readProd } from "../controllers/prodController.js";
import { validateToken } from "../modules/authModule.js";

const transactionRouter =express.Router()


transactionRouter.post("/", createProd);
//transactionRouter.get("/:nompro", validateToken, readProd);
transactionRouter.get("/", validateToken, readProd);

export default transactionRouter