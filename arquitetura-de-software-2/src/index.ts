import { app } from "./controller/app"
import { userRouter } from "./controller/routes/userRouter"
import { createTask } from './endpoints/createTask'

app.use("/user/", userRouter)

app.post('/task', createTask)


