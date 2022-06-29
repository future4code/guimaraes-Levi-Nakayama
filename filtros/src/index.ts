import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersAsc } from "./endpoints/getAllUsersAsc";


app.get("/users", getAllUsers)

app.get("/users?sort=name&order=ASC", getAllUsersAsc)
