import {app} from "./app"
import { movieRouter } from "./controller/routes/movieRoute"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)

app.use("/movie", movieRouter)

