import express from "express"
import userRouter from "./userRouter.js"
import transactionRouter from "./transactionRouter.js"


const apiRouter =express.Router()

apiRouter.use("/user", userRouter)
apiRouter.use("/transaction", transactionRouter)

export default apiRouter;