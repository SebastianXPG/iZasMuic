import express from "express"
import userRouter from "./userRouter.js"
import transactionRouter from "./transactionRouter.js"
import { login } from "../modules/authModule.js"


const apiRouter =express.Router()
//api
apiRouter.use("/user", userRouter)
apiRouter.use("/transaction", transactionRouter)
apiRouter.get("/login", login);
export default apiRouter;