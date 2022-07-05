import { app } from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import deleteUser from "./endpoints/deleteUser";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers"

app.get("/users" , getAllUsers)
app.put("/users", createUser)

app.get("/products", getAllProducts)
app.put("/products", createProduct)

app.delete("/users/:id", deleteUser)

console.log("rota purchase")
app.put("/purchase", createPurchase)