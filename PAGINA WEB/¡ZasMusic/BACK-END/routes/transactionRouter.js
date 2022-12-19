import express from "express";


import { createProd, readProd } from "../controllers/prodController.js";
// import { createTransaction } from "../controllers/transactionControllers.js"


const transactionRouter =express.Router()


transactionRouter.post("/", createProd);
transactionRouter.get("/:nompro", readProd);

export default transactionRouter