import { app } from "./app"
import { UserController } from "./controller/userController"

import { createTask } from './endpoints/createTask'

const userController = new UserController()

app.post('/user', userController.createUser)

app.post('/task', createTask)


