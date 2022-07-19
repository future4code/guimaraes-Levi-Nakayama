import { Request , Response} from "express"
import { connection } from "../connection"
import { labe_products, labe_users } from "../type"


export default async function getAllProducts(
    req: Request,
    res: Response
): Promise<void> {
    try {
        
        const name = req.query
    
        const product: labe_products[] = await connection("labecommerce_products")
        
        res.send(product)
    } catch (error: any) {
        res.status(500).send("Server Error")
    
    }}