/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import { v4 } from "uuid"
import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/postRouter"
import { friendsRouter } from "./routes/friendsRoute"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** ENDPOINTS ******************************/
app.use('/user', userRouter)
app.use('/post', postRouter )
app.use('/friends', friendsRouter)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})

