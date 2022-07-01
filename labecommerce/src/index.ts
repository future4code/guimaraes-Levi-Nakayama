import { app } from "./app";
import createUser from "./endpoints/createUser";
import deleteUser from "./endpoints/deleteUser";
import getAllUsers from "./endpoints/getAllUsers"

app.get("/users" , getAllUsers)
/*app.put("/users", createUser)
app.delete("/users/:id", deleteUser)*/